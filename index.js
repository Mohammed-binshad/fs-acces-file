const fs = require("fs");

fs.access("message.txt", fs.constants.F_OK,(err)=>{
    if(err){
        console.log('file is not exist')
    }else(
        console.log('file is exist')
    )
})