const mongoose = require("mongoose");

// uri = "mongodb+srv://RestApi:zIMBSLHJRRRHIXjN@cluster0.3a7twp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (uri) => {
    try{
    console.log("connect db..")
    return mongoose.connect(uri ,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    });
   }
   catch(error){
    console.log("error while , coonecting",error);
   }

};

module.exports  = connectDB;