import express from 'express';
import * as dotenv from 'dotenv';
import { connectdb } from './config/connectdb';

dotenv.config()

const app = express()
connectdb()

app.listen(process.env.PORT,()=>{
    console.log(`This server is running in the port ${process.env.PORT}`);  
})