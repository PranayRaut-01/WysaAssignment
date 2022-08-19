const express = require('express');
const mongoose= require('mongoose')
const route = require('./routes/route.js');
const app = express();

app.use(express.json()); 

mongoose.connect('mongodb+srv://PranayR24:LNs6IH7mT8iLlT4b@pranaycluster.2bkjp.mongodb.net/AssignmentWysa',{
    useNewUrlParser:true
})
.then( ()=> console.log("Mongoose is connected"))
.catch(err=>console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});