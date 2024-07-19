// name.js

const chalk = require('chalk')



function printName() {

    console.log(chalk.blueBright(`

    +=================================================+                                 

    =       ${chalk.yellowBright('------- SUPERSEED TESTNET -------')}         =

    =   ${chalk.greenBright('Feature: ')}                                     =    

    =   ${chalk.greenBright('Menu[1] Tools Send ETH To Random Address')}      =

    =   ${chalk.greenBright('Menu[2] Tools Intract Contract WETH ')}          =

    =   ${chalk.greenBright('Menu[3] Tools Deploy Contract ERC20 ')}          =

    =   ${chalk.greenBright('Menu[4] Tools Bridge to Superseed Testnet ')}    =

    =   ${chalk.magentaBright('Author: Prastian Hidayat')}                      =

    =   ${chalk.magentaBright('NANANUNU')}         =

    +=================================================+

    `));

}

module.exports = { printName };