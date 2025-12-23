import chalk from "chalk"
export  const logger = {
    info : (msg) => console.log(chalk.blue("[INFO]" , chalk.white(msg))) , 
    success : (msg)=> console.log(chalk.green("[SUCCESS]",chalk.white(msg))),
    warn : (msg)=> console.log(chalk.yellow("[WARNING]" , chalk.white(msg))),
    error: (msg)=>{console.log(chalk.red("[ERROR]" , chalk.white(msg)))},
    record: (time,msg)=>{console.log( "[", chalk.green(`${time}`) , "]" , chalk.white(msg))}
}