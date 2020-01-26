const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Event = require('./event.js');


const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 100;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


//ogosh001@umn.edu
//Kobekob33

// Connect to Database
mongoose.connect('mongodb+srv://zstrombeck:hack123@gamegatherer-a1b3b.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true }, function(err){
    if(err){
        console.log("Failed to connect to Database");
    } else {
        console.log('Successfully Connected to Database');
    }
});

//middleware
app.use(express.json()); //body parser

// GETS
app.use(express.static('Public'));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./Public/Home.html"));
});

app.get("/Home", (req, res)=>{
    res.sendFile(path.resolve("./Public/Home.html"));
});






// POSTS
app.post('/add',  async (req, res) => {
    console.log("Adding an Event");
    //console.log(req.body);


    const event = new Event({
        eventName: req.body.eventName,
        eventCreator: req.body.eventCreator,
        email : req.body.email,
        dateStart : req.body.dateStart,
        dateEnd : req.body.dateEnd,
        locationSpec : {
            lat : req.body.locationSpec.lat,
            long : req.body.locationSpec.long,
            locationName : req.body.locationSpec.locationName
        }, 
        phoneNumber : req.body.phoneNumber,
        typeOfGame : req.body.typeOfGame
    });
    console.log(event);
    try{
        const savedEvent = await event.save();
        res.send({event: event.id});
    } catch(err){
        res.status(400).send(err);
    }
});


app.post('/find',  async (req, res) => {
    console.log("Adding an Event");
    //console.log(req.body);

    const events = await Event.find({});
    const data = Array.from(events);
    res.send(data);
    console.log(req.body)



    // const filterEvents = data.filter();
    // res.send(filterEvents)
    // console.log(filterEvents);


    console.log(Array.from(events));
    // const event = new Event({
    //     eventName: req.body.eventName,
    //     eventCreator: req.body.eventCreator,
    //     email : req.body.email,
    //     dateStart : req.body.dateStart,
    //     dateEnd : req.body.dateEnd,
    //     locationSpec : {
    //         lat : req.body.locationSpec.lat,
    //         long : req.body.locationSpec.long,
    //         locationName : req.body.locationSpec.locationName
    //     }, 
    //     phoneNumber : req.body.phoneNumber,
    //     typeOfGame : req.body.typeOfGame
    // });
    // console.log(event);
    // try{
    //     const savedEvent = await event.save();
    //     res.send({event: event.id});
    // } catch(err){
    //     res.status(400).send(err);
    // }
});




// http://localhost:8080/


app.listen(port, ip);
console.log(`Server is Running! on IP:${ip} PORT:${port}`);
module.expres = app;