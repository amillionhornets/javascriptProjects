function userChoice(){
    let choice = document.getElementById("num").value;
    try{
        if(choice < 0){
        throw "Entered Number is less than zero"
    }else if(choice > 4){
        throw "Entered Number is greater than 4"
    }else if(choice == ""){
        throw "No number was entered"
    }else{
        switch(document.getElementById("num").value){
            case "1":
                addData();
                break;
            case "2":
                showData();
                break;
            case "3":
                updateRecord();
                break;
            case "4":
                deleteRecord();
                break;
        }
    }
}
    catch(err){
        alert("Error " + err)
    }
}

function addData(){
    let lead = document.getElementById("lead").value;
    let title = document.getElementById("title").value;
    let phone = document.getElementById("phone").value;
    let notes = document.getElementById("notes").value;
    let transferArray = [lead, ",", title, ",", phone, ",", notes];
    // let toCsvArray = [];
    // for(let i = 0; i < transferArray.length; i++){
    //     toCsvArray.push(transferArray[i])
    //     if(transferArray.length == i + 1){
    //         toCsvArray.push(",")
    //     }
    // }
    // let csvContent = [];
    // for (let index = 0; index < toCsvArray.length; index++) {
    //     csvContent+=toCsvArray[index];
    // }
    moveToCSV();
}

async function showData(){
    const response = await fetch('dylan.csv');
    const data = await response.text();
    const table = data.split('\n').slice(0);
    table.forEach(row => {
        const columns = row.split(',');
        const lead = columns[0];
        const title = columns[1]
        const phone = columns[2];
        const notes = columns[3]
        console.log(lead, title, phone, notes);
    });
}
function updateRecord(){
}

function deleteRecord(){
}

var fs = require('require');
function moveToCSV(){
    for(let i = 0; i < transferArray.length, i++;){
        fs.appendFile('dylan.csv', transferArray[i], function(err){
            if(err) console.log(err);
            else console.log(transferArray[i]);
        })
    }
}