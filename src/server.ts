import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config()

const app = express()


app.listen(process.env.PORT,()=>{
    console.log(`This server is running in the port ${process.env.PORT}`);  
})