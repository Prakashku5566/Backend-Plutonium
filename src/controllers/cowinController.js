let axios = require("axios");

const getdistrict = async function (req, res) {
  try {
    let district = req.query.district_id;
    let date = req.query.date;
    let result = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
    };
    let final = await axios(result);
    let final1 = final.data;
    res.status(200).send({ data: final1 });
  } catch (err) {
    res.status(500).send(err);
  }
};

// assignment 02 solved 
// const gettemprature = async function (req, res) {
//   try {
//     let cityobj = [];
//     let cities = [
//       "Bengaluru",
//       "Mumbai",
//       "Delhi",
//       "Kolkata",
//       "Chennai",
//       "London",
//       "Moscow",
//     ];
//     for (let i = 0; i < cities.length; i++) {
//       const element = cities[i];
//       let obj = { city: cities[i] };
//       let result = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=693beff72440e899f9376ddb138c96c3`
//       );
//       obj.temp = result.data.main.temp;
//       cityobj.push(obj);
//     }
//     let sorted = cityobj.sort((a, b) => a.temp - b.temp);
//     // console.log(sorted)
//     res.status(200).send({ data: sorted });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };


// // assignment no 3 solved 
// const memecreate = async function (req, res) {
//     try {
//       let template = req.query.template_id;
//       let text = req.query.text0;
//       let text1 = req.query.text1;
//       let meme = await axios.post(
//         `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text}&text1=${text1}&username=prakashku5566&password=9570938768`
//       );
//       res.status(200).send(meme.data)
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   };



let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getdistrict = getdistrict;


