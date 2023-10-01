import dbConnection from "../common/db-connection";

const register=async(user:any)=>{
    try{
        const results=await dbConnection.query(`INSERT INTO users(username,hashed_password,is_admin) values(?,?,0)`,[user.username,user.hashedPassword])
    
        return results;
    }
    catch(e:any){
        return {success:false,msg:e.message}
    }
    }
    const login=async(user:any)=>{
        try{
    const results=await dbConnection.query(`Select *from users WHERE username=? and hashed_password=?`,[user.username,user.hashedPassword])
        return results 
    }
        catch(e:any){
            return {success:false,msg:e.message}
        }
    
    }
    export default {register,login}