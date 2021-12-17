const mongoose=require("mongoose");
const validator=require("validator");


const meetingSchema=new mongoose.Schema({

    uid1 :{

        type:String,
        required:true,
        minlength:20
    },
    uid2 :{

        type:String,
        required:true,
        minlength:20
    },
    date :{
        type: Date,
        required:true,
        
    }
})

const Meeting=new mongoose.model('Meeting',meetingSchema);
module.exports=Meeting;