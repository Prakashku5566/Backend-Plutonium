const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
// assignment solution morning
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

router.post('/players', function (req, res) {
 let newPlayer = req.body;
 let playername =newPlayer.name;
 let p = 0

 const pl = players.map(x=>x.name)
 for (let i = 0; i < pl.length; i++) {
    const element = pl[i];
    if(playername===element){
        p=1
      return res.send("this  name is already exists")
    }    
     p=2  
}
if (p=2){
    players.push(newPlayer);
    res.send(  { data: players , status: true }  )
}


 
 

// let unique = players.find(p=>p.name===playername?players.push(newPlayer):res.send("try other player"))
// if(unique===playername){
//    
// }else{
//     res.send("try other")
// //}
// console.log(p.name)
    
    //LOGIC WILL COME HERE
   // res.send(  { data: players , status: true }  )
    // console.log(players);

})
let arr = [23,45,67,456,555,689,5568]
router.post("/post-query-1",function(req,res){
let input = req.query.input;
console.log(req.query.input)
let result = arr.filter(x=>x>input)
    res.send({data:result})
})

//2ND QN SOLUTION
let persons = [{
    name:"pk",
    age:32,
    voting : false
},
{
    name:"ak",
    age:34,
    voting : false 
},
{
    name:"dk",
    age:12,
    voting : false
},
{
    name:"ok",
    age:22,
    voting : false
}]

router.post("/solution1",function(req,res){
    let input = req.query.age
    let final = persons.filter(a=>a.age>=input);
    let final1 = final.map(x=>x.voting=true)
    console.log(final)
    res.send({final})
})




module.exports = router;