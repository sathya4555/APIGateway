var AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "AKIA5KQ62H6INGY6IVVU",
  secretAccessKey: "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", 
  region: "us-east-2"
});

var sns = new AWS.SNS({ apiVersion: "2010-03-31" });
var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

var createTopic = async (topicName) => {
  var createTopicPromise = sns.createTopic({ Name: topicName }).promise();
  try {
    var result = await createTopicPromise;
    console.log(result.TopicArn);
    return result.TopicArn;
  } catch (e) {
    console.log(e);
  }
};

var createQueue = async (queueName) => {
  var createQueuePromise = sqs
    .createQueue({
      QueueName: queueName,
    })
    .promise();
  try {
    var result = await createQueuePromise;
    return result.QueueUrl;
  } catch (e) {
    console.log(e);
  }
};

var getQueueArn = async (queueUrl) => {
  var getQueueAttributesPromise = sqs
    .getQueueAttributes({
      QueueUrl: queueUrl,
      AttributeNames: ["QueueArn"],
    })
    .promise();
  try {
    var result = await getQueueAttributesPromise;
    return result.Attributes.QueueArn;
  } catch (e) {
    console.log(e);
  }
};

var snsSubscribe = async (topicArn, queueArn) => {
  var snsSubscribePromise = sns
    .subscribe({
      TopicArn: topicArn,
      Protocol: "sqs",
      Endpoint: queueArn,
    })
    .promise();
  try {
    var result = await snsSubscribePromise;
    return result.SubscriptionArn;
  } catch (e) {
    console.log(e);
  }
};

var setQueueAttr = async (queueUrl, topicArn, queueArn) => {
  var attributes = {
    Version: "2008-10-17",
    Id: queueArn + "/SQSDefaultPolicy",
    Statement: [
      {
        Sid: "Sid" + new Date().getTime(),
        Effect: "Allow",
        Principal: {
          AWS: "*",
        },
        Action: "SQS:SendMessage",
        Resource: queueArn,
        Condition: {
          ArnEquals: {
            "aws:SourceArn": topicArn,
          },
        },
      },
    ],
  };
  var setQueueAttributesPromise = sqs
    .setQueueAttributes({
      QueueUrl: queueUrl,
      Attributes: {
        Policy: JSON.stringify(attributes),
        ReceiveMessageWaitTimeSeconds: "20",
      },
    })
    .promise();
  try {
    var result = await setQueueAttributesPromise;
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createTopic,
  createQueue,
  getQueueArn,
  snsSubscribe,
  setQueueAttr,
};
