import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try{
       const connextionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

       console.log(`\n Mongodb connected : ${connextionInstance.connection.host}`)
    }
    catch(err){
        console.error(err,'connection error');
        process.exit(1);
    }
};


export default connectDB;