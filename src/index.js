import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.blue.bgGreen.italic("Olá eu sou"));
console.log(chalk.green.bgCyan.bold("Jarvis"));

console.log(logSymbols.success, chalk.green.italic("servidor iniciado com sucesso"));
console.log(logSymbols.error, chalk.red.italic("servidor com problema"));