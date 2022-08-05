const today = new Date();
const currentMonth = today.getMonth();

function getBatchInfo(){
    return "Plutonium, W3D5, the topic for today is Nodejs module system"
}

module.exports.date=today;
module.exports.month=currentMonth+1;
module.exports.Batchinfo=getBatchInfo();