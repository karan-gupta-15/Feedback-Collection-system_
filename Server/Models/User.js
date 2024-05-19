const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({

    name:String,
    email:String,
    text:String
});

module.exports=mongoose.model("users",userSchema);

