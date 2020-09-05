// @ts-nocheck

const Web3 = require('web3')

// ganache local blockchain
const ganache = 'http://127.0.0.1:7545'

// infura
// Mainnet
// const infura_mainnet = 'https://mainnet.infura.io/v3/006328960ee54ae8a36245d0d0b3665b'

//Testnet => Ropsten
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
const web3 = new Web3(ganache)

const accounts = async () => {
    const accounts = await new web3.eth.accounts.create()
    console.log(accounts)
}

accounts();
