import { logger } from "./logger.js"
import path from "path"
export default function ResultHandler(result) { 

    
    const fields = result[0]

    // execlude Extensions List 
    const blockedExtensions = (process.env?.EXT_BLOCKED|| "" ).split(",")
    
    // convert result to real json 
    const jsonResult = []
    for (let x of result) { 
        let record = {}

        for (let j = 0 ; j < fields.length ; j++) { 
            record[fields[j]] = x[j]
        }
     
        // execlude the image files  -> check ext
        let filePath = new URL(record["original"])
        logger.info(filePath.toString())
      
        
        jsonResult.push(record)
    }
    // console.log(jsonResult)
     
    
  
   

 


    // console.log(jsonResult)
}