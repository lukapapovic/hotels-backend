import express from 'express';
import roomControler from '../controllers/room-controler';
const roomRouter=express.Router();
roomRouter.route('/')
            .post(roomControler.insertRoom);
roomRouter.route('/get-by-hotel/:id')  
            .get(roomControler.getRoomsByHotel)
             
            
roomRouter.route('/:id/:room_no') 
                .put(roomControler.updateRoom)           
export default roomRouter;           