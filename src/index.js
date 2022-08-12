const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();


mongoose.connect("mongodb+srv://prakashku5566:9570938768@cluster0.wzd1jtg.mongodb.net/Prakash")
.then(()=>console.log("mongodb connected"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
