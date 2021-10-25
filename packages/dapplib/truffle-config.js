require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski stone dash misery arrow hope kitten slot giggle'; 
let testAccounts = [
"0x8d9491d64861da767785244f47949b353bd554c054e609736626aace9787c28f",
"0x5588a0479474644a7bcaeca8e8885c24b034e8d5fafbdf6c08cb274eaf5a4983",
"0x50cdd1588ad565459acf869427988f2ec629b16fdda4e1db2295a2791411d4b6",
"0x0166d368cb8b34c64eda3ebef477e145f2ded64a890df77482387dd533b9492d",
"0x82236e0f26848b48d5f7422eed3cc4d3ba948f9fe24d94006c137c0ee483586c",
"0x3b051ded08f90eec23f85a7ddaff1c4ab72b7f1d64851f818c8a3969fc101666",
"0x8d9cc94977bb508b03a8dd8e72d2a981faaab1eda178743395705a4d41586f57",
"0x153acf90fff0f919bc5046be8cfe437c46c3edc3dfe50379323743a34412c1b0",
"0x358d28069a909f53a666cffed91935e48abdcb140a453e8a01176f68a785e8ee",
"0x1de457df8b1fe7f268d7c486e15eac2c7c9feb2259a6f724b7f3cb509ae67f8a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


