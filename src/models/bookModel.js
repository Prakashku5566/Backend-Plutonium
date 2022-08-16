const mongoose = require('mongoose');

const bookSchema =new mongoose.Schema({
    bookName:{
        type:String,
        require:true,
        unique:true
    },
    authorName:String,
    category:String,
    year:Number,
    tags:[String],
    ispublished:{type:Boolean,default:false},
    sells:{type:Number,default:1000}
},{ timestamps: true })

module.exports = mongoose.model("Book",bookSchema)//books in mongodb
