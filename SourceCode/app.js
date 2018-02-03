const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
var expressValidator = require('express-validator');

    /* Requiring config files */

const config = require('./server/config/database');

/* MONGOOSE CONNECTION  */

mongoose.connect(config.database);

/* mongoose connection on */
mongoose.connection.on('connected', (req,res) => {
    console.log('Mongodb Connected' +config.database );
}); 
/* mongoose connection failed error  */
mongoose.connection.on('error', (err) => {
    console.log('mongodb not connected' +err);
});

const app = express();

//API file for interacting with MongoDB 
const api = require('./server/routes/user');
//const user = require('./server/models/user');

/* CORS MIDLEWARE */
app.use(cors());

/* BODY PARSER MIDLEWARE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/* PASSPORT MIDDLEWARE */

app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);




//Express Validator
app.use(expressValidator({
    errorFormatter: function(param,msg,value){
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    
    while(namespace.length){
    formParam += '['+ namespace.shift()+']';
}
    return{
        param : formParam,
        msg: msg,
        value : value
        };
    } 
}));



// Angular DISTRIBUTE output folder
app.use(express.static(path.join(__dirname,'public')));

 //Api location 
 app.use('/api',api);
 
 //Send all other requests to the angular app
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'public/index.html'));
 });

/*        SET PORT       */
const port = process.env.port || '3000';
app.set('port',port);

const server = http.createServer(app);
server.listen(port,() => console.log('Server Listening on port'+port));


