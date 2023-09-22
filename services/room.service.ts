import roomRepository from "../repositories/room-repository";

const insertRoom=async(room:any)=>{
    const data=await roomRepository.insertRoom(room);
    return data
};
const getRoomsByHotel=async(id:number)=>{
    const data=await roomRepository.getRoomsByHotel(id);
    const result:any=[]
    data.forEach((room:any)=>{
        result.push({
            hotelId:room.hotel_id,
            roomNo:room.room_no,
            name:room.name,
            description:room.description,
            noOfBeds:room.no_of_beds
        })
        
    })
    return result
}

const updateRoom=async(id:number,room:any)=>{
    const result =await roomRepository.updateRoom(id,room);
    return result

}
export default{insertRoom,getRoomsByHotel,updateRoom}