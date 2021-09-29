const express = require("express");
const router = express.Router();
let currentDate = new Date();
router.get("/1", (req, res) => {
  res.send({
      response: "welcome to API GATEWAY",
      environment: process.env.NODE_ENV,
      deployedOn: currentDate,
    })
    
    .status(200);
});

// router.get('/guru', (req, res) => {
//   res.sendFile( 'C:\Workspace\new proj\atpl-api-api_gateway/indexhtml.html');
// });


module.exports = router;

