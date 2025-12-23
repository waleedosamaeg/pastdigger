import chalk from "chalk"
const banner = `
 _____                                                                      _____ 
( ___ )--------------------------------------------------------------------( ___ )
 |   |                                                                      |   | 
 |   |                                                                      |   | 
 |   |                                                                      |   | 
 |   |         v 1.0                                                        |   | 
 |   |       ____   _    ____ _____   ____ ___ ____  ____ _____ ____        |   | 
 |   |      |  _ \\ / \\  / ___|_   _| |  _ \\_ _/ ___|/ ___| ____|  _ \\       |   | 
 |   |      | |_) / _ \\ \\___ \\ | |   | | | | | |  _| |  _|  _| | |_) |      |   | 
 |   |      |  __/ ___ \\ ___) || |   | |_| | | |_| | |_| | |___|  _ <       |   | 
 |   |      |_| /_/   \\_\\____/ |_|   |____/___\\____|\\____|_____|_| \\_\\      |   | 
 |   |                                                 By Waleed Osama      |   | 
 |   |                                                                      |   | 
 |   |                                                                      |   | 
 |___|                                                                      |___| 
(_____)--------------------------------------------------------------------(_____)
`

function spinner(text) {
    const frames = ["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇","⠏"];
    let i = 0;

    const interval = setInterval(() => {
        process.stdout.write(`\r${chalk.green(frames[i++ % frames.length])} ${text}`);
    }, 100);

    return () => {
        clearInterval(interval);
        process.stdout.write("\r\x1b[2K");
        
    };
}

export const stopSpinner = spinner("Fetching URLS , please wait ...")


export default function (opts) { 
    console.log(banner)
    // console.log()
    const item = chalk.green(`[${chalk.yellow("+")}]`) 
    console.log(item , 'target'.padEnd(20) , ":" , chalk.yellow(opts.domain))
    console.log(item , 'subdomains'.padEnd(20) , ":" , chalk.yellow(opts.subdomain || "*"))
    console.log(item , 'ignored extentions'.padEnd(20) , ":" , chalk.yellow(opts.ignoredExtensions || process.env.EXT_BLOCKED))
    console.log("\n")
   
}
