
const amqp = require('amqplib/callback_api');
const amqplib = require('amqplib');
let RABBIT_URL = 'amqp://localhost';
export const createExchange = async (exchangeName) => {
  // var createTopicPromise = sns.createTopic({ Name: topicName }).promise();
  try {
    var conn = await amqplib.connect(RABBIT_URL);
    var ch = await conn.createChannel()
    await conn.createChannel();
    await ch.assertExchange(exchangeName, 'fanout',{ durable: true });
    //return result.TopicArn;
  } catch (e) {
    console.log(e);
  }
};

export const createQueue = async (queueName,exchangeName) => {

  try {
    var conn = await amqplib.connect(RABBIT_URL);
    var ch = await conn.createChannel()
    await conn.createChannel();
    await ch.assertExchange(exchangeName,'fanout', { durable: true });
    await ch.assertQueue(queueName ,{ durable: true });
    await ch.bindQueue(queueName,exchangeName,'');
  } catch (e) {
    console.log(e);
  }
};


// module.exports = {
//   createExchange,
//   createQueue
// };
