const path =require('path');
const dirpath = path.join(__dirname,'files');
const fs = require('fs');
fs.readdir(dirpath,'utf8',(error,files)=>{
    
        files.forEach((item)=>{
            console.log(item);
        })
});