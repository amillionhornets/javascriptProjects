
// important
const fs = require('fs')

// const files = fs.readdirSync('./');
// console.log(files)

const files2 = fs.readdir('../', function(err, files){
    if(err) console.log("Error", err);
    else console.log('Result', files)
});