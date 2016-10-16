var FCM = require("fcm-node");
var dotenv = require("dotenv");
dotenv.load();


var serverKey = process.env.SERVER_KEY;
var fcm = new FCM(serverKey);

var message = { 
    registration_ids: [],
    priority: 'high',
    content_available: true,
    data: {
        text: "hello"
    }
   
};

fcm.send(message, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("response: ", response);
    }
});