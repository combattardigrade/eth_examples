let Web3 = require('web3')
let web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getTransactionCount('0x80a355E4E0dA302c2850d6f6fBe1F8c66363a286').then(console.log)