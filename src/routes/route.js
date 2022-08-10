const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
/*
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if(movieIndex<0 || movieIndex>=movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/shoes", function(req, res){
    let queryParams = req.query
    let brand = queryParams.brand
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
      res.send(films) 
})

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

       //iterate all the films
       //search for a film whose id matches with the id recevied in request
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               //if there is a match return the response from here
               return res.send(film)
           }
       }

       //if there is no match give an error response
       res.send("The film id doesn't match any movie")
})
*/

/////////// solution 1   ///////////
router.get("/sol1", function (req, res) {
  //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
  let arr= [1,2,3,5,6,7]
  let n = arr[arr.length-1]// returns last element of array
  let sum = n*(n+1)/2;//formula for adding number 28
  let sum1 = arr.reduce((a,b)=>a+b);//reduce method uses for add its value

  let missingNumber = sum-sum1;//28-24=4
 
  ///LOGIC WILL GO HERE
  res.send("missing number is "+missingNumber)  // { data: missingNumber  };
});

//////////////solution 2 /////////////
router.get("/sol2", function (req, res) {
  //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
  let arr= [33, 34, 35, 37, 38]//this is given
  let n = (arr.length)+1;//added 1 because of array has 1 element missing so i added one
  const first = arr[0];//it returns the first element of array  
  const last = arr[arr.length-1];//accessing last element of the array  
  const sum = n*(first+last)/2;// this is the formula for sum of consecutive number
  const sum1 = arr.reduce((a,b)=>a+b);//reduce function takes two parameter and return its sum 
//   console.log(sum);
//   console.log(sum1)
//   console.log(first);
//   console.log(last)
//   console.log(n)
  let missingNumber = sum-sum1;//213-177    = 36    

  ///LOGIC WILL GO HERE 

  res.send( "the missing number is = " +missingNumber );// this is the responce send by request it returns the object or string if i use only variable then it will give an error
});
let arr = [];
router.post("/test-post",(req,res)=>{
     let v= req.body
     arr.push(v)
     console.log(arr)
    res.send(arr);
})


// assigment 10 aug wala 

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
    players.push(newPlayer);
    
    //LOGIC WILL COME HERE
    res.send(  { data: players , status: true }  )
    console.log(players);

})




module.exports = router;
// adding this comment for no reason