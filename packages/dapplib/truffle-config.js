require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october foot blanket razor sister cluster install civil army gauge'; 
let testAccounts = [
"0x8e500c9510b8222a338500fb9f5d28c8c6d290c3c71a534d3d38517758a41c14",
"0xd39e5fafc2ebddf7b9d5f2daa25411a0b3220ffba912161a0b3f5e01bb7f1776",
"0xe1ffec699b29d4de52cea8333895ca8305d81d327d78695eef35b6f15ec724f7",
"0x0f26b3486bf12b5294f70c0a75c9cc0ce6e19fed9ce530f07003fe9add076da5",
"0xabd983f8f6b1d9ed60c06c8c59322eb78adb6a9008e159d2043223b3975bf64b",
"0x124a4b96d557fcf3603e3060158ad1b612a8e40bcfa4613f9f753d1609df1a6d",
"0xada97eee3e7d27105eb5390f795ab7a6e15b74359bc1aed9195972353a200953",
"0xbd25fb5eb8b95b2b257864346d17b868b4e3b759bb150b3170865cc6c63820f7",
"0x5823688c4013e630a532f9f97bc0850a5df2072ca59fc105698535b973d6a1fe",
"0x435e1df7b675115b8e0d9492ba87a8aa5a08f217d1baa8be2f44e783723ce68d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

