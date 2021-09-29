//using config file as per environment
 let rabbitMQURL = process.env.RABBIT_MQ_URL;
//let rabbitMQURL = 'amqps://ekebhczn:O825u_p7PHfdvH91I1ysGDYC-h-G1bBJ@elk.rmq2.cloudamqp.com/ekebhczn'
let environment = process.env.NODE_ENV;
let configFileName = `config-${environment}`;
console.log(configFileName);
if (!environment) {
  console.log("no environment specified using default i.e local environment");
  configFileName = "config-local";
}
var amqp = require("amqplib/callback_api");
const configData = require(`./config-local`);

const LISTENER_INTERVAL: number = process.env.LISTENER_INTERVAL
  ? parseInt(process.env.LISTENER_INTERVAL)
  : 1000;

interface QueueURLMapValue {
  queueName: string[];
  OnSuccessTopicsToPush: string[];
  OnFailureTopicsToPush: string[];
}

export class SNS_SQS {
  private static instance: SNS_SQS;
  private topicARNMap: { [id: string]: string } = {};
  private queueURLMap: { [id: string]: QueueURLMapValue } = {};
  private serviceMethodTopicsMap: { [id: string]: string[] } = {};
  private channel = null;

  private constructor() {
    this.init_AWS_SNS_SQS();
  }

  public static getInstance(): SNS_SQS {
    if (!SNS_SQS.instance) {
      SNS_SQS.instance = new SNS_SQS();
    }
    return SNS_SQS.instance;
  }

  private async init_AWS_SNS_SQS() {
    try {
      console.log("connecting to amq ...", rabbitMQURL);
      amqp.connect(rabbitMQURL, (err, connection) => {
        connection.createChannel((err, channel) => {
          this.channel = channel;
          let topics = configData.Topics;
          for (let i = 0; i < topics.length; i++) {
            let topic = topics[i];
            let topicName = topic.TopicName;
            //create channel
            this.channel.assertExchange(topicName, "fanout", {
              durable: true,
            });

            let subscribers = topic.Subscribers;
            for (let j = 0; j < subscribers.length; j++) {
              let subscriber = subscribers[j];
              let queueName = subscriber.QueueName;
              let q = this.channel.assertQueue(queueName, {
                exclusive: false,
              });
              //bind the queue with exchange with queueName
              this.channel.bindQueue(queueName, topicName, "");
              let queueURLMapValue = {
                queueName: queueName,
                OnSuccessTopicsToPush: subscriber.OnSuccessTopicsToPush,
                OnFailureTopicsToPush: subscriber.OnFailureTopicsToPush,
              };
              this.queueURLMap[queueName] = queueURLMapValue;
            }
          }
        });

      });
    } catch (e) {
      console.log(e);
    }
  }

  public publishMessageToTopics(
    serviceName: string,
    topicName: string,
    methodName: string,
    message: any,
    id: number
  ) {
    console.log("inside pubTopics",topicName,message,id)
    this.publishMessageToTopic(topicName, message,id);
  }

  public async publishMessageToTopic(topicName, message,id) {
    // publish the message to topic
    let jsondata = JSON.parse(message);
    jsondata.Id = id;
    let newdata = JSON.stringify(jsondata);
    console.log('message iss : '+ newdata);
    console.log('message iss : '+ topicName);
    this.channel.publish(topicName, "", Buffer.from(newdata));
  }

  public async listenToService(noOfSocket,topicName, serviceName, callBack) {
    try {
      var queueURLMapValue = this.queueURLMap[topicName + "-" + serviceName];
      var queueName = queueURLMapValue.queueName;
      // consume message from queue
      this.channel.consume(
        queueName,
        function (msg) {
          if (msg.content) {
            let message = JSON.parse(msg.content);
            callBack({
              message,
              OnSuccessTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush,
              OnFailureTopicsToPush: queueURLMapValue.OnSuccessTopicsToPush
            });
          }
        },
        { noAck: true }
      );
    } catch (e) {
      setTimeout(() => {
        console.log('inside catch');
        
        this.listenToService(noOfSocket,topicName, serviceName, callBack);
      }, 5000)
    }
  }

  /**
    listen to services
  */
  public listenToServices(noOfSocket,serviceName, callback) {
    let topics = configData.Topics;
    for (let i = 0; i < topics.length; i++) {
      let topic = topics[i];
      let topicName = topic.TopicName;
      let subscribers = topic.Subscribers;
      for (let j = 0; j < subscribers.length; j++) {
        let subscriber = subscribers[j];
        let vServiceName = subscriber.Service;
        if (vServiceName === serviceName) {
          this.listenToService(noOfSocket,topicName, serviceName, callback);
        }
      }
    }
  }
}