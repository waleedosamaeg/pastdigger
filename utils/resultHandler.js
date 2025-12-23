import { logger } from "./logger.js"
import path from "path"

export default function ResultHandler(result) { 

    
    const fields = result[0]

    // execlude Extensions List 
    const blockedExtensions = (process.env?.EXT_BLOCKED|| "" ).split(",")
    
    // convert result to real json 
    const jsonResult = []
    for (let x of result.slice(1)) { 
        let record = {}

        for (let j = 0 ; j < fields.length ; j++) { 
            record[fields[j]] = x[j]
        }
     

        // format the date of archieved page
        const year = (record.timestamp).slice(0,4)
        const month = (record.timestamp).slice(4,6)
        const day = (record.timestamp).slice(6,8)

        const date = `${year}-${month}-${day}`
        record.timestamp = date
        // execlude the image files  -> check ext
        let extension = path.extname(new URL(record["original"]).pathname).toLowerCase()
   
        if (! blockedExtensions.includes(extension.replaceAll("." , ""))) { 
            jsonResult.push(record)
        }
       
        
      
        
    }

    // frame 
   
    for (let i of jsonResult) {
            logger.record(i.timestamp , i.original)
    }
    return (jsonResult)
     
    
  
   

 


    // console.log(jsonResult)
}