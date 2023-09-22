import dbConnection from "../common/db-connection";

const insertRoom=async(room:any)=>{
    try{
        const result=await dbConnection.query(`Insert into room(hotel_id,room_no,no_of_beds,name,description,updated,
                                            created)Values(?,?,?,?,?,now(),now())`,[room.hotelId,room.roomNo,
                                                room.noOfBeds,room.name,room.description])
                                         
              return{success:true,result}                                  
    }
    catch(e:any){
        return{success:false,msg:e.message}

    }; 
  };
  const getRoomsByHotel=async(id:number)=>{
    try{
        const result=await dbConnection.query(`Select *from room where hotel_id=?`,[id])
        return result
    }
    catch(e:any){
        return {success:false,msg:e.message}
    }
  }
  const updateRoom=async(id:number,room:any)=>{
    try{
        const result=await dbConnection.query(`Update room Set no_of_beds=?,name=?,
                                                description=?Where hotel_id=? AND room_no=?`,
                                                [room.noOfBeds,room.name,room.description,room.hotelId,room.roomNo] )
   
   return{success:true,result}                                         }
    catch(e:any){
        return{success:false,msg:e.message}
    }

  }


export default{insertRoom,getRoomsByHotel,updateRoom}