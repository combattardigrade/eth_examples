/*#################
## CONFIGURATION ##
#################*/

// Step1: Set up the appropriate configuration
const Web3 = require('web3')
const url = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(url)
const EthereumTransaction = require('ethereumjs-tx').Transaction

// Step2: Set the sending and receiving addresses for the transaction
let sendingAddress = '0x80a355E4E0dA302c2850d6f6fBe1F8c66363a286'
let receivingAddress = '0xA578585b12949a9D41bA10B159Bc5089a26DdD75'

// Step3: Check the balances of each address
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

/*########################
## CREATE A TRANSACTION ##
########################*/

// Step 4: Set up the transaction using the transaction variables as shown
let rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 1,
    data: ""
}

// Step 5: View the raw transaction
rawTransaction

// Step 6: Check the new account blances (they should be the same)
web3.eth.getBalance(sendingAddress).then(console.log)
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They have't changed because they need to be signed...

/*########################
## Sign the Transaction ##
########################*/

// Step 7: Sign the transaction with the Hex value of the private key of the second address
let privateKeySender = 'd2326edb08b58ce3528b301c29253826300da0c10f21eb66a1fdd7570b237f97'
let privateKeySenderHex = new Buffer(privateKeySender,'hex')
let transaction = new EthereumTransaction(rawTransaction)
transaction.sign(privateKeySenderHex)

/*#######################################
## Send the transaction to the network ##
#######################################*/
let serializedTransaction = transaction.serialize()
web3.eth.sendSignedTransaction(serializedTransaction)
