import chalk from "chalk"
export  const logger = {
    info : (msg) => console.log(chalk.blue("[INFO]" , chalk.white(msg))) , 
    success : (msg)=> console.log(chalk.green("[SUCCESS]",msg)),
    warn : (msg)=> console.log(chalk.yellow("[WARNING]" , msg)),
    error: (msg)=>{console.log(chalk.red("[ERROR]" , msg))}
}