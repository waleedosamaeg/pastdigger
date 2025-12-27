import { logger } from "./logger.js"
import path from "path"
import FitlerExtension from "./filterExtensions.js";
import global from "../config/global.js";

export default function ResultHandler(result ) { 

    
    const fields = result[0]

 
    
    // convert result to real json 
    const jsonResult = []
    for (let x of result.slice(1)) { 
        let record = {}

        for (let j = 0 ; j < fields.length ; j++) { 
            record[fields[j]] = x[j]
        }
     
        // filter Extensions Class
        const blackListed = new FitlerExtension(record['original'])
        if (!blackListed.filter())  
            {
                global.filteredResults += 1
                continue
            } 

        // format the date of archieved page
        const year = (record.timestamp).slice(0,4)
        const month = (record.timestamp).slice(4,6)
        const day = (record.timestamp).slice(6,8)

        const date = `${year}-${month}-${day}`
        record.timestamp = date
      
     
        
        jsonResult.push(record)
        continue
      
        
    }

    // frame 
   
    for (let i of jsonResult) {
            logger.record(i.timestamp , i.original)
    }
    // console.log( ">> filtered : ", global.filteredResults)
    return (jsonResult)
     
    
  
   

 


    // console.log(jsonResult)
}