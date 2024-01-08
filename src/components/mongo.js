const mongoose = require("mongoose");
mongoose.connect ("mongodb://0.0.0.0:27017/form-data")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const newSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports=collection;