import { Request,Response } from "express";
import hotelService from "../services/hotel-service";

const getAllHotels= async(req:Request,res:Response)=>{
    const data= await hotelService.getAllHotels()
    res.send(data)
}
const getHotelById=async(req:Request,res:Response)=>{
    const id=req.params.id;
    const data= await hotelService.getHotelById(parseInt(id))
    res.send(data)
}
const insertHotel=async(req:Request,res:Response)=>{
    const data= await hotelService.insertHotel(req.body)
    res.send(data)
}
const updateHotel=async(req:Request,res:Response)=>{
    const id=req.params.id;
    const data= await hotelService.updateHotel(parseInt(id),req.body)
    res.send(data)
}
const deleteHotel=async(req:Request,res:Response)=>{
    const id=req.params.id;
    const data= await hotelService.deleteHotel(parseInt(id))
    res.send(data)

}
export default{getAllHotels,getHotelById,insertHotel,updateHotel,deleteHotel}