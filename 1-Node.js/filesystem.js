const filesystem = require('fs');


filesystem.readFile('example.txt','utf8',(err,data)=>{
    if(err) throw err;

    console.log(data);
});