import axios from "axios"


const results =  async (url)=>{
 
        const response =  await axios.get(url , {"timeout" : process.env.TIMEOUT })
        return {state : true , response:response }
    
  
}
export default results