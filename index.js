var FCM = require("fcm-node");
var dotenv = require("dotenv");
dotenv.load();


var serverKey = process.env.SERVER_KEY;
var fcm = new FCM(serverKey);

var message = {};
message.to = "/topics/test"; // send to topic 'test'
message.priority = "high";
message.content_available = true;
message.data = { text: "hello world" };


fcm.send(message, function(err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log("response: ", response);
    }
});