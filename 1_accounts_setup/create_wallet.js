// @ts-nocheck

// infura Network
// Mainnet
const infura_mainnet = 'https://mainnet.infura.io/v3/006328960ee54ae8a36245d0d0b3665b'

// Testnet => Ropsten
// const infura_ropsten = 'https://ropsten.infura.io/v3/006328960ee54ae8a36245d0d0b3665b'

// Geth
//  const geth = 'http://127.0.0.1:8545'

// @ts-ignore
// Instances connecting to web3 with different networks
//  const web3 = new Web3(ganache)
//  const web3 = new Web3(infura_mainnet)
//  const web3 = new Web3(infura_ropsten)
//  const web3 = new Web3(geth)

const Web3 = require('web3')
const web3 = new Web3(infura_mainnet);


// this function creates multiple accounts/wallets
//**Note**//  two was passed as the first parameter, it will return two different accounts/wallets with different privatekeys and privatekeys
// const createMultipleWallet = async () => {
//     try {
//         const wallet = await web3.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
//         console.log(wallet)
//     } catch (error) {
//         console.log(error);
//     }
// }
// createMultipleWallet();


// this function creates a single account/wallet without passing anything in the parameter.
const createWallet = async () => {
    try {
        const wallet = await web3.eth.accounts.wallet.create();
        console.log(wallet)
    } catch (error) {
        console.log(error);
    }
}
createWallet();


