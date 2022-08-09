const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
   

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

//solution 1
router.get("/movie",function(req,res){
  let movies = ["kanchana","heropanti","the earth","the sun","tiranga"]
res.send(movies)
});

//solution 2

router.get('/get-movie/:indexnumber', function(req , res){
    
  let movies2 = ['The earth' , 'Kanchana 2' , 'super man' , 'dhoni']
  let index =req.params.indexnumber
  let result = movies2[index]
  console.log(result)
  res.send(result)

});

//solution 3
router.get('/get-movi/:indexnumber', function(req , res){
    
  let movies2 = ['The earth' , 'Kanchana 2' , 'super man' , 'dhoni']
  let index =req.params.indexnumber
  if(index>movies2.length){
    res.send("Please enter valid number")
  }
  let result = movies2[index]
  console.log(result)
  res.send(result)

});


//solution 4
router.get('/movies-obj',function(req,res){
let movies3 = [{id:1,name:"the drama"},{id:2,name:"the hero giri"},{id:3,name:"kyu bane karopati"}]
res.send(movies3);
});

//solution 5

router.get('/get-films/:indexNumber',function(req, res){ //student detail api he    

  let moviesName=[ {"id": 1,"name": "The drama"}, 
{"id": 2,"name": "the hero"}, 
{"id": 3,"name": "holi aur khoon"},
{"id": 4,"name": "horror 5"}]
  let index = req.params.indexNumber;
   if(index >= moviesName.length){
      return res.send("no movie exist with this id ")
   }else{
   res.send(moviesName[index])
   }
})

// router.get('/movies-by/:indexNumber',function(req,res){
//   let movies3 = [{id:1,name:"the drama"},{id:2,name:"the hero giri"},{id:3,name:"kyu bane karopati"}]
//   let index = req.params.indexNumber;
//   if(index>movies3[index]){
//     res.send("no such movie exists")
//   }
//   res.send(movies3[index])
//   console.log(movies3[index])
// })

module.exports = router;