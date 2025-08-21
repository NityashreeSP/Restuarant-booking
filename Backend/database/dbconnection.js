import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName :"Restaurant",
    }) 
    .then(()=> {
        console.log("connected to database successfully");
        
    }).catch((error) => {
        console.error("Database connection failed:", error);
    });
}