const bookModel = require("../models/bookModel");

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbook = async function(req,res){
    let _id = req.param.id
    let allbooks= await bookModel.findByIdAndUpdate(_id,req.body)
    let data1 = await bookModel.findById(_id)
    res.send({msg:data1})
}

module.exports.createBook = createBook;
module.exports.getbook=getbook