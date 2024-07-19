require('dotenv').config();

const fs = require('fs');
const readline = require('readline');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const { printName } = require('./utils/name.js');

// Membaca konfigurasi jaringan dari file network.json
const networkConfig = JSON.parse(fs.readFileSync('./config/network.json', 'utf-8'));
const selectedNetwork = networkConfig['Superseed Testnet'];
const { RPC_URL, CHAIN_ID, WETH_ADDRESS } = selectedNetwork;

// Fungsi untuk meminta input pengguna
function promptUser(prompt) {
    return new Promise(resolve => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(chalk.blueBright(prompt), answer => {
            rl.close();
            resolve(answer);
        });
    });
}

// Fungsi untuk meminta password
function inputPassword() {
    const password = 'superseed-testnet';
    const input = readlineSync.question('Enter password: ', {
        hideEchoBack: true,
        mask: ''
    });
    if (input !== password) {
        console.log('Incorrect password. Access denied.');
        process.exit(1);
    }
}

// Fungsi utama
async function main() {
    inputPassword();
    printName();
    console.log(chalk.green('Available Scripts:'));
    console.log('1. Transfer ETH');
    console.log('2. Interact with WETH');
    console.log('3. Deploy Smart Contract');
    console.log('4. Bridge ETH');
    console.log(chalk.green('0. Exit Program'));

    const choice = await promptUser('Choose the script to run: ');
    switch (choice) {
        case '1':
            const transfer = require('./src/transfer');
            transfer(RPC_URL, CHAIN_ID);
            break;
        case '2':
            const interact = require('./src/interaction');
            interact(RPC_URL, CHAIN_ID, WETH_ADDRESS);
            break;
        case '3':
            const deploySC = require('./src/deploySC');
            deploySC(RPC_URL, CHAIN_ID);
            break;
        case '4':
            const bridge = require('./src/bridge');
            bridge(RPC_URL, CHAIN_ID);
            break;
        case '0':
            console.log(chalk.yellow('Exiting program. Goodbye!'));
            process.exit(0);
            break;
        default:
            console.log(chalk.red('Invalid choice. Please restart and choose 1, 2, 3, or 4.'));
            break;
    }
}

main().catch(console.error);
