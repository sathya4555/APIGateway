
module.exports = {
  Topics: [
    {
      TopicName: "ALERTCONFIGS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertAlertConfigs",
          OnSuccessTopicsToPush: ["ALERTCONFIGS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_ADD:05fda334-d8c5-4193-98ce-eeab2689bfef",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_ADD",
    },
    {
      TopicName: "ALERTCONFIGS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateAlertConfigs",
          OnSuccessTopicsToPush: ["ALERTCONFIGS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_UPDATE:c3c05637-c81b-45e3-8579-bd893520e0de",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_UPDATE",
    },
    {
      TopicName: "ALERTCONFIGS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteAlertConfigs",
          OnSuccessTopicsToPush: ["ALERTCONFIGS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_DELETE:17340b79-e02f-4448-9278-1d4852a5d692",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_DELETE",
    },

    {
      TopicName: "IOTDEVICE_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertIotDevice",
          OnSuccessTopicsToPush: ["IOTDEVICE_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_ADD:1c688d7d-00d0-47f9-b07c-8257729947ad",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_ADD",
    },
    {
      TopicName: "IOTDEVICE_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateIotDevice",
          OnSuccessTopicsToPush: ["IOTDEVICE_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_UPDATE:33d73ecf-2324-44d1-aa72-d68b1a72b812",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_UPDATE",
    },
    {
      TopicName: "IOTDEVICE_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteIotDevice",
          OnSuccessTopicsToPush: ["IOTDEVICE_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_DELETE:7b7c519d-6cf1-4d28-9313-36dbade52939",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_DELETE",
    },


    {
      TopicName: "SENSORDATA_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorData",
          OnSuccessTopicsToPush: ["SENSORDATA_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_ADD:217dac50-4141-45e2-a2d2-155836ac6ea1",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_ADD",
    },
    {
      TopicName: "SENSORDATA_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensorData",
          OnSuccessTopicsToPush: ["SENSORDATA_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_UPDATE:c2160b12-5c7c-449b-b973-14648a8c7daa",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_UPDATE",
    },
    {
      TopicName: "SENSORDATA_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensorData",
          OnSuccessTopicsToPush: ["SENSORDATA_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_DELETE:1bd9ec12-05be-421e-8bc3-083931380146",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_DELETE",
    },


    {
      TopicName: "SENSORS_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorS",
          OnSuccessTopicsToPush: ["SENSORS_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_ADD:5d630319-15d8-475d-a2ae-89e200ac0bc6",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_ADD",
    },
    {
      TopicName: "SENSORS_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensors",
          OnSuccessTopicsToPush: ["SENSORS_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_UPDATE:07ec2b25-8106-4115-a953-f5609baa6824",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_UPDATE",
    },
    {
      TopicName: "SENSORS_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensors",
          OnSuccessTopicsToPush: ["SENSORS_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_DELETE:6587f28d-e344-4ec4-8c09-d07118dc202c",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_DELETE",
    },

    {
      TopicName: "SENSORTYPE_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "InsertSensorType",
          OnSuccessTopicsToPush: ["SENSORTYPE_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_ADD-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_ADD-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_ADD-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_ADD:6f86f535-4ba8-4ac6-8874-56e09b9d998f",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_ADD",
    },
    {
      TopicName: "SENSORTYPE_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "PUT",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "UpdateSensorType",
          OnSuccessTopicsToPush: ["SENSORTYPE_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_UPDATE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_UPDATE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_UPDATE-IOT_SERVICE",
          SubscriptionArn:
            "rn:aws:sns:us-east-1:915966410640:SENSORTYPE_UPDATE:ead36555-be9b-4210-ad80-028895071569",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_UPDATE",
    },
    {
      TopicName: "SENSORTYPE_DELETE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "DELETE",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "DeleteSensorType",
          OnSuccessTopicsToPush: ["SENSORTYPE_DELETED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_DELETE-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_DELETE-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_DELETE-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_DELETE:066ae9fd-b180-4b72-af97-fcc316030e0e",
        },
      ],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_DELETE",
    },
    {
      TopicName: "ALERTCONFIGS_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_ADDED:f8c66cbe-305d-4bc3-b0d0-6df8f7aaff3b",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_ADDED:eba3275f-3dce-4b37-9c54-a9c26913796c",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_ADDED",
    },
    {
      TopicName: "ALERTCONFIGS_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_UPDATED:fbdc6c14-28d3-43ec-bbfb-450b22a9ce39",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_UPDATED:ff24a793-5ff6-4cb2-ba5c-e9bf402f67f0",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_UPDATED",
    },

    {
      TopicName: "ALERTCONFIGS_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendAlertConfigsDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_DELETED:4b3057ea-1bec-4356-a97d-359ce2145365",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:ALERTCONFIGS_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_DELETED:5d9b4081-bdae-46f7-89d9-34bae2e1941c",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:ALERTCONFIGS_DELETED",
    },
    {
      TopicName: "IOTDEVICE_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_ADDED:61363203-51c9-4060-8ca8-e359648ecfce",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_ADDED:3527c198-d9cf-4573-8e2d-8467fb7b291c",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_ADDED",
    },
    {
      TopicName: "IOTDEVICE_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_UPDATED:b2bad2c8-478a-4d89-9569-f928aadc5473",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_UPDATED:5c4bb6d6-ca4e-47e6-bc1f-0fb246fa1118",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_UPDATED",
    },

    {
      TopicName: "IOTDEVICE_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendIotDeviceDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_DELETED:4c8690df-99c8-4d50-95ec-d8f88339919d",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:IOTDEVICE_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_DELETED:c3910ed5-48ad-4354-9112-2e90775d2d83",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:IOTDEVICE_DELETED",
    },

    {
      TopicName: "SENSORDATA_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_ADDED:13fb2e4f-58a4-43c0-9fac-7fdb3a1c7a49",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_ADDED:f965978e-3fb1-4867-88d6-24a1d687afd7",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_ADDED",
    },
    {
      TopicName: "SENSORDATA_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_UPDATED:60d09ff6-cb65-4f77-810d-dd34dc0536f4",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_UPDATED:d786376a-06e4-41d8-9085-ad6b4b64ce86",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_UPDATED",
    },

    {
      TopicName: "SENSORDATA_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorDataDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_DELETED-IOT_SERVIC",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_DELETED:e4879dbb-5e16-4e9e-9394-81e18cd143e3",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORDATA_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORDATA_DELETED:1b5b6e31-c1fc-44ee-94dd-cbbf5f80f52c",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORDATA_DELETED",
    },


    {
      TopicName: "SENSORTYPE_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_ADDED:2f678a23-8bb3-48f7-8772-35c8788caf71",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_ADDED:1bc8aa5d-3a02-41d5-bcbc-2ed04f462fb6",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_ADDED",
    },
    {
      TopicName: "SENSORTYPE_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_UPDATED:d678b45c-b102-4fbe-bc9c-5a80cda1c5d0",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_UPDATED:9e6affa7-eab9-451a-8ec3-09dc9584908d",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_UPDATED",
    },

    {
      TopicName: "SENSORTYPE_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorTypeDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_DELETED:6aeef335-5a38-4a76-9caa-2cbd4eb1d49e",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORTYPE_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_DELETED:9b893134-1416-4d17-a6b8-5fe68fc91888",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORTYPE_DELETED",
    },


    {
      TopicName: "SENSORS_ADDED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsAddedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_ADDED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_ADDED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_ADDED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_ADDED:9cd89752-ede9-4669-81d8-4a527e2a2dad",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_ADDED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_ADDED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_ADDED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_ADDED:2efcfd8b-e14e-4142-8edb-b10a7e25b386",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_ADDED",
    },
    {
      TopicName: "SENSORS_UPDATED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsUpdatedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_UPDATED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_UPDATED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_UPDATED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_UPDATED:f0c3fb25-7651-424a-b0ad-c39203345142",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_UPDATED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_UPDATED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_UPDATED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_UPDATED:4c03afaf-0c3c-40fb-a5d6-e070d42d06c3",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_UPDATED",
    },

    {
      TopicName: "SENSORS_DELETED",
      Publishers: ["IOT_SERVICE"],
      Method: "UNKNOWN",
      Subscribers: [
        {
          Service: "IOT_SERVICE",
          Function: "SendSensorsDeletedNotificationToAdmin",
          OnSuccessTopicsToPush: ["NOTIFICATION_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_DELETED-IOT_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_DELETED-IOT_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_DELETED-IOT_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_DELETED:b2df1f21-34ef-42ab-86d3-57aa5db96a59",
        },
        {
          Service: "API_GATEWAY_SERVICE",
          Function: "FunctionNameToAcknowledgeUIHandle",
          OnSuccessTopicsToPush: [],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "SENSORS_DELETED-API_GATEWAY_SERVICE",
          QueueUrl:
            "https://sqs.us-east-1.amazonaws.com/915966410640/SENSORS_DELETED-API_GATEWAY_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-east-1:915966410640:SENSORS_DELETED-API_GATEWAY_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-east-1:915966410640:SENSORS_DELETED:3f56c21f-95ee-48a5-8941-1b4c81d21b75",
        }],
      TopicArn: "arn:aws:sns:us-east-1:915966410640:SENSORS_DELETED",
    },







  ],
};