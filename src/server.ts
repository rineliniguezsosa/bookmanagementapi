import express from 'express';
import * as dotenv from 'dotenv';
import { connectdb } from './config/connectdb';
import { userRoutes,bookgenresRoutes } from './routes';

dotenv.config()

const app = express()
app.use(express.json())
app.use('/user',userRoutes)
app.use('/bookgenre',bookgenresRoutes)
connectdb()

app.listen(process.env.PORT,()=>{
    console.log(`This server is running in the port ${process.env.PORT}`);  
})