import hotelRepository from "../repositories/hotel-repository"

const getAllHotels= async()=>{
    const data=await hotelRepository.getAllHotels();
    const result:any=[];
    data.forEach((hotel:any)=>{
        result.push({
            id:hotel.id,
            name:hotel.name,
            description:hotel.description,
            yearOfStart:hotel.year_of_start,
            noOfStart:hotel.no_of_stars,
            imagePath:hotel.image_path,
            updated:hotel.updated,
            created:hotel.created
        })
    })
    return result
   
   

}
const getHotelById=async(id:number)=>{
    const data=await hotelRepository.getHotelById(id)
    if(data && data.length>0){
        return{
            id:data[0].id,
            name:data[0].name,
            description:data[0].description,
            yearOfStart:data[0].year_of_start,
            noOfStars:data[0].no_of_stars,
            imagePath:data[0].image_path,
            updated:data[0].updated,
            created:data[0].created

        }
    }
    return null
}
const insertHotel=async(hotel:any)=>{
    const result=await hotelRepository.insertHotel(hotel)
    return result
}
const updateHotel=async(id:number,hotel:any)=>{
    const result=await hotelRepository.updateHotel(id,hotel)
    return result
}
const deleteHotel=async(id:number)=>{
    const result=await hotelRepository.deleteHotel(id)
    return result
}
export default{getAllHotels,getHotelById,insertHotel,updateHotel,deleteHotel}