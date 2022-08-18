const Authormodel = require("../models/authorModel");

const createAuthor = async (req,res)=>{
let data = req.body;

let savedData = await Authormodel.create(data)
res.send({msg:savedData})
}


module.exports.createAuthor = createAuthor