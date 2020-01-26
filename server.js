const express = require('express');


const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// GETS
app.use(express.static('Public'));

app.get("/", (req, res)=>{
    res.sendFile("./Public/Home.html");
});

app.get("/Home", (req, res)=>{
    res.sendFile("./Public/Home.html");
});






// POSTS
app.post('/register', async (req, res) =>{

    //validate data before making a user
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    } 

    //Verify email is not already in the system
    const emailAlreadyExists = await User.findOne({email: req.body.email});

    if(emailAlreadyExists){
        return res.status(400).send("Email already exists");
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(User.listIndexes);
    console.log('Got a post request');
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    // /console.log(user);
    try{
        const savedUser = await user.save();
        res.send({user: user.id});
    } catch(err){
        res.status(400).send(err);
    }
});




// http://localhost:8080/


app.listen(port, ip);
console.log(`Server is Running! on IP:${ip} PORT:${port}`);
module.expres = app;