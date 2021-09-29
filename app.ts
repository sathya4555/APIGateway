import { DtoBase } from "./submodules/atpl-api-Dtos/submodules/atpl-api-common/DtoBase";
import { ResponseModel } from "./submodules/atpl-api-Dtos/submodules/atpl-api-common/ResponseModel";
import { RequestModel, RequestModelQuery } from "./submodules/atpl-api-Dtos/submodules/atpl-api-common/RequestModel";

const express = require("express");
//var awsIot = require('aws-iot-device-sdk');
const https = require('https');


//const sendRabbitMQ = require('./rabbitMQ');

//const rabbitMq = require('./rabbitMQ');


import { v4 as uuidv4 } from "uuid";
//import authAPI from "api-auth";

const fs2 = require('fs');

const options = {
  key: fs2.readFileSync('private.key'),
  cert: fs2.readFileSync('certificate.crt'),
  ca: fs2.readFileSync('ca_bundle.crt')
};
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
import axios from "axios";
import  {Dictionary}  from "dictionaryjs";
let environment = process.env.NODE_ENV;
require('custom-env').env(environment);
console.log(process.env.AWS_REGION);
const port = process.env.PORT || 4000;
const index = require("./routes/index");
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
//const openApiDocumentation = require('./openApiDocumentation');
const app = express();
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(index);
app.options("*", cors());
var routes = require('./routes');
app.use('/', routes);
app.use(cors());
const server = https.createServer(options, app);

var sockets = [];

let activeConnectionDict = new Dictionary();
let socketAndDeviceDict = new Dictionary();


var AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

AWS.config.update({region:'us-east-2'});


let configFileName = `config-${environment}`;


console.log(configFileName);
if (!environment) {
  console.log("no environment specified using default i.e local environment");
  configFileName = "config-local";
}
//const configData = require(`config/config-local`);


var sqs = new AWS.SQS({ apiVersion: "2012-11-05" });




var messageToUi = "";
//var sns = new AWS.SNS({ apiVersion: "2010-03-31" });
//var paramsSnsPublish = {
//Message: JSON.stringify({'ClusterName': process.env.CLUSTER_NAME, 'RecordName':process.env.RECORD_NAME}), /* required */
//ExchangeArn: process.env.UPDATE_RECORD_TOPIC_ARN
//};
//sns.publish(paramsSnsPublish, function (err, data) {
//if (err) console.log(err, err.stack); // an error occurred
//else console.log(data);           // successful response
//});


import { SNS_SQS } from "./submodules/atpl-api-AWS/SNS_SQS";
import { request } from "express";
import { json } from "body-parser";
import SocketIO from "socket.io";
import { Socket } from "dgram";
import { stringify } from "querystring";
var sns_sqs = SNS_SQS.getInstance();


import { RabbitMQ_Utility } from "./RabbitMQ_Utility";

//import { rabbitMqclass  } from "./rabbitmqclass";
//const r_test = RabbitMQ_Utility.test();
var rabbitmq = RabbitMQ_Utility.getInstance();
//var rabbitmq:RabbitMQ_Utility = null;

//var rabbitmq = rabbitMqclass.getInstance();

var authority = ""; var userInfoEndPoint = ""; var emailid = "";
var middleware = {


  /**
   * Configuration Middleware which uses referer as header and gives back the authority which is passed to the next middleware
   * 
   * @param {string} req Request
   * @param {string} res Response
   * @param {string} next Next
   */

  configurationMiddleware: async function (req, res, next) {
    let referer = req.headers["referer"];

    console.log("configurationMiddleware Endpoint is:" + `https://cognito-idp.ca-central-1.amazonaws.com/ca-central-1_dcs5wTtEl/.well-known/openid-configuration`);
    let getResult = await axios.get(
      `https://cognito-idp.ca-central-1.amazonaws.com/ca-central-1_dcs5wTtEl/.well-known/openid-configuration`,
      {
        headers: {
          Referer: referer,
        },
      }
    );


    var data = getResult.data;

    authority = data["issuer"];




    next();
  },




  /**
   * Second middleware which makes rest call to Authority fetched from previous middleware. The Userinfo_Endpoint is generated here
   * 
   * @param {string} req Request
   * @param {string} res Response
   * @param {string} next Next
   */

  openConfigurationMiddleware: async function (req, res, next) {

    console.log("OpenConfigurationMiddleware Endpoint is: " + `${authority}/.well-known/openid-configuration`);
    let getResult = await axios.get(
      `${authority}/.well-known/openid-configuration`

    );
    var data = getResult.data;
    userInfoEndPoint = data["userinfo_endpoint"];




    next();
  },


  /**
 * Authentication Middleware which authenticates user by validating the access token provided in headers.  It makes rest call to userinfo_Endpoint. If the token is invalid an error is thrown.
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {string} next Next
 */

  authenticationMiddleware: async function (req, res, next) {
    let authorization = req.headers["authorization"];

    console.log("AuthenticationMiddleware Endpoint is: " + `${userInfoEndPoint}`);
    try {

      let getResult = await axios.get(
        `${userInfoEndPoint}`,
        {
          headers: {
            Authorization: authorization

          },
        }
      );
      var data = getResult.data;
      // emailid = data["email"];
      emailid = "sandipkumarnandi@gmail.com"



      next();
    }
    catch (e) { res.send("Invalid Access Token"); }



  },


  /**
 * Authorization Middleware which gets token from headers, servicename from parameter and checks whether user has authorization for the respective request
 * 
 * @param {string} req Request
 * @param {string} res Response
 * @param {string} next Next
 */

  authorizationMiddleware: async function (req, res, next) {
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    let service_name = req.params.servicename;
    let service = req.params.service;
    referer = referer.substring(8, referer.length);
    var method = req.method;

    if (method === "GET") method = "Read";
    else if (method === "POST") method = "Create";
    else if (method === "DELETE") method = "Delete";
    else if (method === "PUT") method = "Update";

    console.log("AuthorizationMiddleware Endpoint is: " + `https://platform.antronsys.com/v1/Authorize/GetClaims/${emailid}/${referer}EnergyIntegrator/${method}/EnergyIntegrator_${service}`);
    try {

      let getResult = await axios.get(
        `https://platform.antronsys.com/v1/Authorize/GetClaims/${emailid}/${referer}EnergyIntegrator/${method}/EnergyIntegrator_${service}`,
        {
          headers: {
            Authorization: authorization
          },
        }
      );
      var data = getResult.data;

      console.log("Access: " + data[0]["AllowAccess"]);
      if (data[0]["AllowAccess"] === true)
        next();
      else { res.send("Error 401 : unauthorized"); }
    }
    catch (e) { res.send("Error 401 :  unauthorized"); }
  }
}

const serviceHostResolver = {
  IOT_SERVICE: process.env.IOT_SERVICE,
  IOTSERVICE: process.env.IOTSERVICE

};


var corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/indexhtml.html');
// });

const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "HEAD", "OPTIONS"],
    allowedHeaders: ["my-custom-header","Token"],
     credentials: false,
  },
});



app.get('/connectdevice/:id/:socketid', (req, res) => {
  let deviceid = parseInt(req.params.id);

  console.log(typeof deviceid);


  let socketid = req.params.socketid;

  if (socketAndDeviceDict.contains(deviceid) != true) {
    socketAndDeviceDict.set(socketid, deviceid);
    console.log("connected");
 
    res.send("You're connected");

  }
  else {
    for (

      let [key, value] of socketAndDeviceDict.entries()) {
      if (deviceid === value && socketid === key) {
        res.send("Already connected");
        console.log("Already Connected");

      }
      else { res.send("Cant Connect"); console.log("Cant Connect"); }
    }
  }



});

const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if(typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
 

app.post('/component/login', (req, res) => {
  // Mock user
  const user = {
    id: 1, 
    username: 'brad',
    email: 'brad@gmail.com'
  }

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
});
  

 

io.on("connection", (socket) => {
  console.log("client connected with id: ", socket.id);

  // console.log("number of client connected : "+ String(activeConnectionDict.length));
  sockets.push(socket);

  var i = 0;

  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : "+ String(activeConnectionDict.length));

  activeConnectionDict.set(socket.id, socket);
  console.log("number of client connected : "+ String(activeConnectionDict.length));
  

  
  socket.emit("socketIdFromServer", { socket_id: socket.id });
  console.log("krishna");
  
  socket.on("disconnect", () => {

    console.log("Client disconnected");
    // activeConnectionDict.remove(socket.id);
    activeConnectionDict.remove(socket.id);
    console.log("number of client connected : "+ String(activeConnectionDict.length));

    if (socketAndDeviceDict.has(socket.id) === true) {
      // device.publish(process.env.Request_ARN, JSON.stringify({
      //   "live_data": 0,
      //   "iot_device_id": socketAndDeviceDict.get[socket.id]
      activeConnectionDict.remove(socket.id);
      console.log("number of client connected : "+ String(activeConnectionDict.length));



      }
      //));
      
      socketAndDeviceDict.remove(socket.id);

      //device2.unsubscribe(process.env.Device_ARN);


    // }

    socket.disconnect(true);
  

  });
 });

//Apply the middleware (configuration, authenticaiton, authorization)
//referer and token are passed in headers
//Apply the cors
//Take out the token and referer and put that in requestModel thats coming inside the body and then send that to the TOPIC
//SocketId will come in request Model.



/**
* Post call to the Microservice through SNS/SQS
* 
* @param {string} req Request
* @param {string} res Response
*/

app.post("/:servicename/:service", async (req, res) => {

  console.log("Inside POST");
  let requestBody: RequestModel<any> = req.body;
  let message = JSON.stringify(requestBody);
  const user = message

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
  

  let method_name = "POST";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_ADD";
  let id = 5;
  
  console.log("sathya",message);
  console.log(service_name);
  console.log(exchangeName);

  var  myres = sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message, id
  );
  

  // rabbitmq.publishMessageToExchanges(service_name,exchangeName,method_name,message,id);
//rabbitmq.recieveRabbitMQ(req.params.service+"_ADDED");
  //console.log(myres)
  res.status(200).send({ message: "request has been taken" });
  
});


app.post("/:servicename/:service/sort", async (req, res) => {

  console.log("Inside SORT");
  let requestBody: RequestModel<any> = req.body;
  let message = JSON.stringify(requestBody);
  const user = message

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
  

  let method_name = "POST";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_SORT";
  let id = 5;
  
  console.log("sathya",message);
  console.log(service_name);
  console.log(exchangeName);

  var  myres = sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message, id
  );
  

  // rabbitmq.publishMessageToExchanges(service_name,exchangeName,method_name,message,id);
//rabbitmq.recieveRabbitMQ(req.params.service+"_ADDED");
  //console.log(myres)
  res.status(200).send({ message: "request has been taken" });
  
});



/**
* Put call to the Microservice through SNS/SQS
* 
* @param {string} req Request
* @param {string} res Response
*/
//app.put("/:servicename/:service/:id", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware], async (req, res) => {
  app.put("/:servicename/:service/:id", async (req, res) => {
console.log("Inside PUT");

  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;

  let method_name = "PUT";
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_UPDATE";
  let id = req.params.id;
  let message = JSON.stringify(requestBody);
  console.log("service name",service_name);
  console.log("exchange_name",message);
  
  
  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message,
     id
  );
  res.status(200).send({ message: "request has been taken" });
});





/**
* Delete call to the Microservice through SNS/SQS
* 
* @param {string} req Request
* @param {string} res Response
*/

app.delete("/:servicename/:service/:id", async (req, res) => {
  console.log("Inside DELETE");
  let requestBody: RequestModel<any> = req.body;
  let referer = req.headers["referer"];
  let authorization = req.headers["authorization"];
  requestBody.CommunityUrl = referer;
  requestBody.token = authorization;

  let method_name = "DELETE";
  let id = req.params.id;
  let service_name = req.params.servicename;
  let exchangeName = req.params.service + "_DELETE";
  let message = JSON.stringify(requestBody);
  sns_sqs.publishMessageToTopics(
    service_name,
    exchangeName,
    method_name,
    message,
    id
  );  res.status(200).send({ message: "request has been taken" });
});





/**
* Direct Post call to the Microservice 
* 
* @param {string} req Request
* @param {string} res Response
*/


app.post("/test/:servicename/:service", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware],

  async (req, res) => {

    let requestBody: RequestModel<any> = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;
    let service_name = req.params.servicename;
    let service = req.params.service;
    let url = serviceHostResolver[service_name] + "/" + service;
    console.log(url);
    let result = await axios.post(url, requestBody);
    result.data["CommunityUrl"] = requestBody.CommunityUrl;
    result.data["token"] = requestBody.token;
    res.status(result.status).send(result.data);
  }
);



/**
* Direct Put call to the Microservice 
* 
* @param {string} req Request
* @param {string} res Response
*/

app.put("/test/:servicename/:service/:id", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware],

  async (req, res) => {
    let id = req.params.id;
    let requestBody: RequestModel<any> = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;


    let service_name = req.params.servicename;
    let service = req.params.service;
    let url = serviceHostResolver[service_name] + "/" + service + "/" + id;
    try {
      let result = await axios.put(url, requestBody);
      //result.data["CommunityUrl"] = requestBody.CommunityUrl;
      result.data["token"] = requestBody.token;
      res.status(result.status).send(result.data);
    } catch (e) {
      console.log(e);
    }
  }
);






/**
* Direct delete call to the Microservice 
* 
* @param {string} req Request
* @param {string} res Response
*/

app.delete(
  "/test/:servicename/:service/:id", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware],

  async (req, res) => {
    let requestBody: RequestModel<any> = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;

    let service_name = req.params.servicename;
    let service = req.params.service;
    let id = req.params.id;
    let url = serviceHostResolver[service_name] + "/" + service + "/" + id;
    try {
      let result = await axios.delete(url);
      result.data["CommunityUrl"] = requestBody.CommunityUrl;
      result.data["token"] = requestBody.token;
      res.status(result.status).send(result.data);

    } catch (e) {
      console.log(e);
    }
  }
);




/**
* Direct get call with ID to the Microservice
* 
* @param {string} req Request
* @param {string} res Response
*/

app.get(
  "/test/:servicename/:service/:id", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware, middleware.authorizationMiddleware],

  async (req, res) => {

    let requestBody: RequestModel<any> = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;

    let service_name = req.params.servicename;
    let service = req.params.service;
    let id = req.params.id;
    //use service name to build the host
    let url = serviceHostResolver[service_name] + "/" + service + "/" + id;
    //let url = service_name + "." + process.env.BASE_URL + "/" + service;
    //iotmicroservice.atpltd.net/
    let result = await axios.get(url);
    result.data["CommunityUrl"] = requestBody.CommunityUrl;
    result.data["token"] = requestBody.token;
    console.log(result.data);
    res.status(result.status).send(result.data);
  }
);





/**
* Direct get call to the Microservice 
* 
* @param {string} req Request
* @param {string} res Response
*/

app.get(
  "/test/:servicename/:service", [middleware.configurationMiddleware, middleware.openConfigurationMiddleware, middleware.authenticationMiddleware, middleware.authorizationMiddleware],

  async (req, res) => {
    let requestBody: RequestModel<any> = req.body;
    let referer = req.headers["referer"];
    let authorization = req.headers["authorization"];
    requestBody.CommunityUrl = referer;
    requestBody.token = authorization;
    console.log(requestBody);
    let service_name = req.params.servicename;
    let service = req.params.service;
    let url = serviceHostResolver[service_name] + "/" + service;
    console.log(url);

    let result = await axios.get(url, { params: requestBody });
    result.data["CommunityUrl"] = requestBody.CommunityUrl;
    result.data["token"] = requestBody.token;
    res.status(result.status).send(result.data);
  }
);




/**
* Listeing to port
* 
*/

//https.createServer(options, app).listen(port, () => {
server.listen(port, () => {
  console.log(process.env.IOT_SERVICE);
  console.log("inside listen")
  var noOfSocket = 1;
  sns_sqs.listenToServices(noOfSocket,"API_GATEWAY_SERVICE", (result) => {
    let { message } = result;
    console.log("inside liosten",message);
    //getting the browser socket to hom the response needs to be send
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    if (vSocket) {
      console.log("response to client to call call back function", message);
      vSocket.emit("successResponseFromServer", message);
    }else{
      console.log("-+error message", message);
    }
  });
  sns_sqs.listenToServices(noOfSocket,"ERROR_RECEIVER", (result) => {
    let { message } = result;
    console.log(message);
    let vSocket: any = activeConnectionDict.get(message.SocketId);
    if (vSocket) {
      vSocket.emit("errorResponseFromServer", message);
    }
  });
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => 
res.send('Hello Wfrom nodejs        authentication server'));

// exports.Validate = function(req, res, next){
//   var token = req.headers['authorization'];
//   request({
//          url : `https://cognito
//   idp.${pool_region}.amazonaws.com/${poolData.UserPoolId}/.well-known/jwks.json`,
//          json : true
//       }, function(error, response, body){
//          if (!error && response.statusCode === 200) {
//              pems = {};
//              var keys = body['keys'];
//              for(var i = 0; i < keys.length; i++) {
//                   var key_id = keys[i].kid;
//                   var modulus = keys[i].n;
//                   var exponent = keys[i].e;
//                   var key_type = keys[i].kty;
//                   var jwk = { kty: key_type, n: modulus, e: exponent};
//                   var pem = jwkToPem(jwk);
//                   pems[key_id] = pem;
//              }
//              var decodedJwt = jwt.decode(token, {complete: true});
//                   if (!decodedJwt) {
//                       console.log("Not a valid JWT token");
//                       res.status(401);
//                       return res.send("Invalid token");
//                  }
//               var kid = decodedJwt.header.kid;
//                   var pem = pems[kid];
//                   if (!pem) {
//                       console.log('Invalid token');
//                       res.status(401);
//                       return res.send("Invalid token");              
//                   }
//               jwt.verify(token, pem, function(err, payload) {
//                       if(err) {
//                           console.log("Invalid Token.");
//                           res.status(401);
//                           return res.send("Invalid tokern");
//                       } else {
//                            console.log("Valid Token.");
//                            return next();
//                       }
//                  });
//          } else {
//                console.log("Error! Unable to download JWKs");
//                res.status(500);
//                return res.send("Error! Unable to download JWKs");
//          }
//      });
//   }


module.exports = app;