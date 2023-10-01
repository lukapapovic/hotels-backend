//import lodash from 'lodash'
import express from 'express';
import 'reflect-metadata'
import hotelRouter from './routing/hotel-routing';
import roomRouter from './routing/room-routing';
import userRouter from './routing/user-routing';
import dbConnection from './common/db-connection';
import cors from 'cors';
import path from 'path';
const app=express();
app.use(cors());
app.use(express.json());

console.log(__dirname);
app.use(express.static(path.join(__dirname,'public')))

app.use('/hotel',hotelRouter);
app.use('/room',roomRouter);
app.use(userRouter)


dbConnection.initialize()
                .then(()=>{
                    console.log('Connected to db')
                })
                .catch((err:any)=>{
                    console.log(err)
                })

app.listen('3000',()=>{
    console.log('Server is listening at port 3000')

})