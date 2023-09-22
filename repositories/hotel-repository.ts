import dbConnection from "../common/db-connection";
const getAllHotels=async()=>{
    try{
        const data=await dbConnection.query('Select *from hotel')
        return data
    }
    catch(e){
        return []
    }}
    const getHotelById=async(id:number)=>{
        try{
            const data=await dbConnection.query(`Select *from hotel Where id= ?`,[id])
            return data
        }
        catch(e){
            return e
        } }
    const insertHotel=async(hotel:any)=>{
        try{
            const result=await dbConnection.query(`Insert into hotel(name,description,no_of_stars,year_of_start,updated,
                                                    created)Values(?,?,?,?,now(),now())`,
                                                    [hotel.name,hotel.description,hotel.noOfStars,hotel.yearOfStart]);
       return {success:true,result}
                                                }
        catch(e:any){
            return {success:false,msg:e.message}
        } }  ; 

    const updateHotel=async(id:number,hotel:any)=>{
        try{
            const result=await dbConnection.query(`Update hotel Set name=?,description=?,no_of_stars=?,year_of_start=? 
                                                    Where id=?`,[hotel.name,hotel.description,hotel.noOfStars,
                                                        hotel.yearOfStart,id] )
       
       return{success:true,result} 
     }
        catch(e:any){   
            return{success:false,msg:e.message}
        } }  ;
        
    const deleteHotel=async(id:number)=>{
        try{
            const result=await dbConnection.query(`Delete  from hotel Where id=?`,[id])
       return {success:true} 
    }
        catch(e:any){
            return{success:false,msg:e.message}

        }

    }    
export default{getAllHotels,getHotelById,insertHotel,updateHotel,deleteHotel}