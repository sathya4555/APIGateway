const fs = require("fs");
const {
  createTopic,
  createQueue,
  getQueueArn,
  snsSubscribe,
  setQueueAttr,
} = require("./configureAWS-SQS-SNS");


;

const configData = require(`./config-local`);
var initProject = async () => {
  
  let topics = configData.Topics;

  for (let i = 0; i < topics.length; i++) {
    let topic = topics[i];
    let topicName = topic.TopicName;
    let subscribers = topic.Subscribers;
    let topicArn = await createTopic(topicName);
    topic.TopicArn = topicArn;

    for (let j = 0; j < subscribers.length; j++) {
      let subscriber = subscribers[j];
      let serviceName = subscriber.Service;
      let queueName = topicName + "-" + serviceName;
      let queueUrl = await createQueue(queueName);
      let queueArn = await getQueueArn(queueUrl);
      let subscriptionArn = await snsSubscribe(topicArn, queueArn);
      await setQueueAttr(queueUrl, topicArn, queueArn);
      subscriber.QueueName = queueName;
      subscriber.QueueUrl = queueUrl;
      subscriber.QueueArn = queueArn;
      subscriber.SubscriptionArn = subscriptionArn;
    }
  }
  let data = JSON.stringify((configData), null, 2);
 
  fs.writeFileSync("config-local.json", data);
};

initProject();
