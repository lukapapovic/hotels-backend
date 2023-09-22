//import lodash from 'lodash'
import express from 'express';
import 'reflect-metadata'
import hotelRouter from './routing/hotel-routing';
import roomRouter from './routing/room-routing';
import dbConnection from './common/db-connection';
const app=express();
app.use(express.json())

app.use('/hotel',hotelRouter);
app.use('/room',roomRouter)

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