import axios from "axios"


const results =  async (url)=>{
 
        const response =  await axios.get(url , {"timeout" : 40000 })
        return {state : true , response:response }
    
  
}
export default results