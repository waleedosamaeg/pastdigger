    import dotenv from "dotenv";
    import generateUrl from "./utils/generateUrl.js";
    import args from "./utils/commander.js"
    import fetchUrls from "./utils/fetchUrls.js"
    import {logger} from "./utils/logger.js";
    import ResultHandler from "./utils/resultHandler.js";
    import banner , {stopSpinner} from "./utils/banner.js"

    dotenv.config();
    const options = args.opts();
    options.subdomain === true ? options.subdomain="*" : null
    banner(options)
    let results  = ""


    const url = generateUrl({options})
    fetchUrls(url)
    .then((res) =>{ 
        results = res.response.data
        stopSpinner()
        ResultHandler(results)
     
      
    })
    .catch((err)=>{
        // error in request : 
        if (err.request) { 
            
            return logger.error( "UnExpected Error , check your internet Connection !")
        }
        if (err.response) { 
            return logger.error( "Service Not Available  Now , Try again !")
            
        }
        else { 
            return logger.error(err)
        }
    })

