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

const address = "0x742d35cc6634c0532925a3b844bc454e4438f44e";

// Using await/async
const accounts = async () => {
    try {
        const accountBalance = await web3.eth.getBalance(address)
        console.log(accountBalance)
    } catch (error) {
        console.log(error);
    }
}
accounts();


// Using a callback function
const getAccount = () => {
    web3.eth.getBalance(address, (balance, error) => {
        if (!error) {
            return getBalance = web3.utils.fromWei(balance, 'ether')
        } else {
            console.log(error);
        }
    })
}

getAccount();