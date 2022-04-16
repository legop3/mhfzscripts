xlsx = require('node-xlsx').default;
const path = require('path');
const fs = require('fs');
const readout = xlsx.parse(`${__dirname}/Item_Data.xlsx`);
const directoryPath = path.join(__dirname, 'sheetfolder');







fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
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




console.log(getAllFiles("sheetfolder"))


getAllFiles("sheetfolder").forEach(element => {
const file = element
var tablemaker = []
var newfile = null
    const sheetopen = xlsx.parse(element)
    sheetopen.forEach(element => {

            element.data.forEach(element => {

                // console.log(element[0])
                // console.log(file)
                const japname = element[0]
                const engname = element[1]



                readout.forEach(element => {

                  element.data.forEach(element => {
                      // console.log(element[1])

                        if(element[1] == japname){
                          // console.log('we')
                          // console.log(japname + ' '+engname+ ' ' + element[0])
                          // newfile = 'processed_' + file.split('\\')[file.split('\\').length - 1]
                          // console.log('be')
                          
                          tablemaker.push([japname, engname,element[0]])



                        }

                  });
              
              });

            });
        
        });
//////////////////
// console.log('file')
// console.log(newfile)
console.log(tablemaker)
console.log(file.split('\\')[file.split('\\').length - 1])
var filepath = 'output\\' + file.split('\\')[file.split('\\').length - 1]
var filename = file.split('\\')[file.split('\\').length - 1]
var buffer = xlsx.build([{name: filename, data: tablemaker}]); // Returns a buffer
fs.writeFileSync(filepath, buffer)

tablemaker = null


});