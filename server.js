const express = require('express');

const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.use(express.static('Public'));


app.get("/", (req, res)=>{
    res.send("You made it to the server, it's working");
})




// http://localhost:8080/


app.listen(port, ip);
console.log(`Server is Running! on IP:${ip} PORT:${port}`);
module.expres = app;