xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const { timeStamp } = require('console');
const directoryPath = path.join(__dirname, 'spreadsheets');


fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        // console.log(file); 
    });
});

const getAllFiles = function(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
  
    arrayOfFiles = arrayOfFiles || []
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
      }
    })
    
    return arrayOfFiles
  }




console.log(getAllFiles("spreadsheets"))

getAllFiles("spreadsheets").forEach(element => {
    console.log('wa')
    // console.log(element)
    const sheetopen = xlsx.parse(element)
sheetopen.forEach(element => {


    // console.log(element)
    // element.data.forEach(element => {
    //     console.log(element)
    //     console.log('waw')
    // })

    for(var i = 0; i < 9; i++){
        console.log(element.data[Math.floor(Math.random()*element.data.length)][2])
        
    }






})

  

})