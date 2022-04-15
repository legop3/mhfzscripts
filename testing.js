xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const readout = xlsx.parse(`${__dirname}/Item_Data.xlsx`);
const directoryPath = path.join(__dirname, 'sheetfolder');




// console.log(readout)
// readout.forEach(element => {

//     element.data.forEach(element => {
//         // console.log(element[0] + ' ' + element[1])




//     });

// });


// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         console.log(file); 
//     });
// });

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




console.log(getAllFiles("sheetfolder"))

getAllFiles("sheetfolder").forEach(element => {
const file = element

    const sheetopen = xlsx.parse(element)
    sheetopen.forEach(element => {

            element.data.forEach(element => {

                console.log(element[0] + ' ' + element[1])
                console.log(file)
        
        
        
        
            });
        
        });
//////////////////







});

