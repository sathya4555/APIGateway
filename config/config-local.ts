
module.exports = {
    Exchanges:  [
      {
        ExchangeName: "STUDENT_ADD",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "POST",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "STUDENT_ADD-STUDENTCOURSE_SERVICE",
          },
        ],
       },
       {
        ExchangeName: "ROLE_ADD",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "POST",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "ROLE_ADD-STUDENTCOURSE_SERVICE",
          },
        ],
       },
       {
        ExchangeName: "ROLE_UPDATE",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "ROLE_UPDATE-STUDENTCOURSE_SERVICE",
          },
        ],
       },
       {
        ExchangeName: "APP_ADD",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "APP_ADD-STUDENTCOURSE_SERVICE",
          },
          
        ],
       },
       {
        ExchangeName: "APP_UPDATE",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "APP_UPDATE-STUDENTCOURSE_SERVICE",
          },
          
        ],
       },
       {
        ExchangeName: "EMPLOYEE_UPDATE",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "EMPLOYEE_UPDATE-STUDENTCOURSE_SERVICE",
          },
        ],
       },

       {
        ExchangeName: "EMPLOYEE_DELETE",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "EMPLOYEE_DELETE-STUDENTCOURSE_SERVICE",
          },
        ],
       },

       {
        ExchangeName: "FEATURE_ADD",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "FEATURE_ADD-STUDENTCOURSE_SERVICE",
          },
        ],
       },
       {
        ExchangeName: "ADD_DELETE",
        Publishers: ["API_GATEWAY_SERVICE"],
        Method: "PUT",
        Subscribers: [
          {
            Service: "STUDENTCOURSE_SERVICE",
            Function: "InsertSTUDENT",
            OnSuccessExchangesToPush: ["STUDENT_ADDED"],
            OnFailureExchangesToPush: ["ERROR_RECEIVER"],
            QueueName: "ADD_DELETE-STUDENTCOURSE_SERVICE",
          },
        ],
       },
     
    ]
  };

  