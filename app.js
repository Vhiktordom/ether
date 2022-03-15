    const Web3 = require("web3");
    
    getBalanceOfAddress = async () => {
        const Mainrpc = new Web3(new Web3.providers.HttpProvider('rpc-link-goes-here'));
        const Ropsenrpc = new Web3(new Web3.providers.HttpProvider('rpc-link-goes-here'));
        const Rinkbyrpc = new Web3(new Web3.providers.HttpProvider('rpc-link-goes-here'));

        //Mainnet rpc 
        const Mainetbalance = await Mainrpc.eth.getBalance("0xB07626Bc2fF18d680ec886c3109e9BF6ee05E6b7");
        const Ropsenbalance = await Ropsenrpc.eth.getBalance("0xB07626Bc2fF18d680ec886c3109e9BF6ee05E6b7");
        const Rinkbybalance = await Rinkbyrpc.eth.getBalance("0xB07626Bc2fF18d680ec886c3109e9BF6ee05E6b7");

        return{
            main: Mainrpc.utils.fromWei(Mainetbalance.toString(), 'ether'),
            ropsen:Mainrpc.utils.fromWei(Ropsenbalance.toString(), 'ether'),
            rinkby:Mainrpc.utils.fromWei(Rinkbybalance.toString(), 'ether')
        }
    }
