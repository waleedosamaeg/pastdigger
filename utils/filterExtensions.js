import { options } from "../pastdigger.js"
import path from "path"

class FitlerExtension  {
    constructor(record = "") { 
        this.record = record;
        
    }
    filter() { 
        // get the exetension of the record
        const pathname  = new URL(this.record).pathname
        const extension = (path.extname(pathname)).toLowerCase().replaceAll("." , "") || ""
        

        // check of the Extension is blackListed or not 
       
        const BlackList = this.blacklist()

     
        // if the extension in black list Ignore 
        if (!BlackList.includes(extension)) { 
            return true
        }
        return false
       
    }
    blacklist()  {
        let blackListedExtensions = options.filterExtension
        // if the user provide the --fe arg or not
        if (!blackListedExtensions || blackListedExtensions === true || blackListedExtensions.replaceAll("," , "").trim().length === 0)  { 
            return blackListedExtensions = (process.env.EXT_BLOCKED).split(",") || []
        }
      

        blackListedExtensions = blackListedExtensions.replaceAll("," , " ").trim().split(" ")
       
        return blackListedExtensions
     
    }
}
export default FitlerExtension