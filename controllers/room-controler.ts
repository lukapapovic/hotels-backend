import { Request,Response } from "express";
import roomService from "../services/room.service";

const insertRoom=async(req:Request,res:Response)=>{
    const data=await roomService.insertRoom(req.body);
    res.send(data)
};
const getRoomsByHotel=async(req:Request,res:Response)=>{
    const data=await roomService.getRoomsByHotel(parseInt(req.params.id))
    res.send(data)
}
const updateRoom=async(req:Request,res:Response)=>{
    const id=req.params.id;
    const data=await roomService.updateRoom(parseInt(id),req.body)
    res.send(data)

}
export default{insertRoom,getRoomsByHotel,updateRoom}