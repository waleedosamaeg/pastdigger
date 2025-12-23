import {program} from "commander";
const args = program
    .name(process.env.TOOL_NAME || "pastDigger")
    .version(process.env.VERSION || "1.0.0")
    .description(process.env.DESCRIPTION || "")
    .requiredOption("-d, --domain <domain>" , "target domain" )
    .option("-s, --subdomain [value]" , "include specefic subdomain  * for all")
    .option("-o, --output [value]" , "output format")
    .parse(process.argv);


export default args