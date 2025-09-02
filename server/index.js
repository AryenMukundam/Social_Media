import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import authRouter from './routes/user.routes.js';

const app = express();
app.use(express.json());
dotenv.config();

connectDB(process.env.dbUrl)

app.use('/api/auth' , authRouter)

app.get('/' , (req , res)=>{
    res.send("Hello I am ready")
})

app.listen(5000 , ()=>{
    console.log('server is running')
})