const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    username :{
        type:String,
        required:true,
        minlength:3
    },

})



const User=new mongoose.model('User',userSchema);


module.exports=User;
