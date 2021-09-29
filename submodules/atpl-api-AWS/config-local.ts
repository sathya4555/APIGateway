
module.exports = {
  Topics:  [
    {
      TopicName: "STUDENTS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSTUDENTS",
          OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADD",
    },
    {
      TopicName: "STUDENTS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSTUDENTS",
          OnSuccessTopicsToPush: ["STUDENTS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_UPDATE:07ec2b25-8106-4115-a953-f5609baa6824",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_UPDATE",
    },
    {
      TopicName: "STUDENTS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSTUDENTS",
          OnSuccessTopicsToPush: ["STUDENTS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_DELETE:6587f28d-e344-4ec4-8c09-d07118dc202c",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_DELETE",
    },
	{
      TopicName: "STUDENTS_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSTUDENTSAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADDED:9cd89752-ede9-4669-81d8-4a527e2a2dad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADDED:2efcfd8b-e14e-4142-8edb-b10a7e25b386",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_ADDED",
    },
    {
      TopicName: "STUDENTS_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSTUDENTSUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_UPDATED:f0c3fb25-7651-424a-b0ad-c39203345142",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_UPDATED:4c03afaf-0c3c-40fb-a5d6-e070d42d06c3",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_UPDATED",
    },

    {
      TopicName: "STUDENTS_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSTUDENTSDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_DELETED:b2df1f21-34ef-42ab-86d3-57aa5db96a59",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "STUDENTS_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/STUDENTS_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:STUDENTS_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:STUDENTS_DELETED:3f56c21f-95ee-48a5-8941-1b4c81d21b75",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:STUDENTS_DELETED"
    },
    {
      TopicName: "COURSES_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertCOURSES",
          OnSuccessTopicsToPush: ["COURSES_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_ADD",
    },
    {
      TopicName: "COURSES_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateCOURSES",
          OnSuccessTopicsToPush: ["COURSES_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_UPDATE:07ec2b25-8106-4115-a953-f5609baa6824",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_UPDATE",
    },
    {
      TopicName: "COURSES_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteCOURSES",
          OnSuccessTopicsToPush: ["COURSES_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_DELETE:6587f28d-e344-4ec4-8c09-d07118dc202c",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_DELETE",
    },
	{
      TopicName: "COURSES_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendCOURSESAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_ADDED:9cd89752-ede9-4669-81d8-4a527e2a2dad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_ADDED:2efcfd8b-e14e-4142-8edb-b10a7e25b386",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_ADDED",
    },
    {
      TopicName: "COURSES_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendCOURSESUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_UPDATED:f0c3fb25-7651-424a-b0ad-c39203345142",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_UPDATED:4c03afaf-0c3c-40fb-a5d6-e070d42d06c3",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_UPDATED",
    },

    {
      TopicName: "COURSES_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendCOURSESDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_DELETED:b2df1f21-34ef-42ab-86d3-57aa5db96a59",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "COURSES_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/COURSES_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:COURSES_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:COURSES_DELETED:3f56c21f-95ee-48a5-8941-1b4c81d21b75",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:COURSES_DELETED"
    },
    {
      TopicName: "REGISTRATION_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertREGISTRATION",
          OnSuccessTopicsToPush: ["REGISTRATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_ADD",
    },
    {
      TopicName: "REGISTRATION_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateREGISTRATION",
          OnSuccessTopicsToPush: ["REGISTRATION_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_UPDATE:07ec2b25-8106-4115-a953-f5609baa6824",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_UPDATE",
    },
    {
      TopicName: "REGISTRATION_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteREGISTRATION",
          OnSuccessTopicsToPush: ["REGISTRATION_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_DELETE:6587f28d-e344-4ec4-8c09-d07118dc202c",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_DELETE",
    },
	{
      TopicName: "REGISTRATION_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendREGISTRATIONAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_ADDED:9cd89752-ede9-4669-81d8-4a527e2a2dad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_ADDED:2efcfd8b-e14e-4142-8edb-b10a7e25b386",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_ADDED",
    },
    {
      TopicName: "REGISTRATION_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendREGISTRATIONUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_UPDATED:f0c3fb25-7651-424a-b0ad-c39203345142",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_UPDATED:4c03afaf-0c3c-40fb-a5d6-e070d42d06c3",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_UPDATED",
    },

    {
      TopicName: "REGISTRATION_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendREGISTRATIONDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_DELETED:b2df1f21-34ef-42ab-86d3-57aa5db96a59",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "REGISTRATION_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-2.amazonaws.com/915966410640/REGISTRATION_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-2:915966410640:REGISTRATION_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-2:915966410640:REGISTRATION_DELETED:3f56c21f-95ee-48a5-8941-1b4c81d21b75",
        }],
      TopicArn: "arn:aws:sns:us-east-2:915966410640:REGISTRATION_DELETED"
    }
  ]
};