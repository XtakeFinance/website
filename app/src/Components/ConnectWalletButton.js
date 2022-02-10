import React from "react";
import {Button} from "antd";
import {WalletOutlined} from '@ant-design/icons';
import {resetBalance, setAccount, setBalance, setConnection, setMetamaskAlert} from "../Actions/walletActions";
import {resetInput} from "../Actions/transactionActions";
import {useDispatch} from "react-redux";
import {useMoralis} from "react-moralis";
import {METAMASK_NOT_INSTALLED} from "./MetamaskAlert";
import {
    AVALANCHE,
    AVALANCHE_CHAIN_RPC_URL,
    AVALANCHE_TEST_NET,
    AVALANCHE_TEST_NET_BLOCK_EXPLORER,
    AVALANCHE_TEST_NETWORK_ID,
    AVALANCHE_TEST_NETWORK_ID_HEX,
    AVAX
} from "../AppConstants";


export const otherStyle = {borderRadius: '5px', width: "100%"}
export const appBarStyle = {borderRadius: '5px'}

const AVALANACHE_TEST_NET_CONFIG = {
    method: 'wallet_addEthereumChain',
    params: [{
        chainId: AVALANCHE_TEST_NETWORK_ID_HEX, // Hexadecimal version of 80001, prefixed with 0x
        chainName: AVALANCHE_TEST_NET,
        nativeCurrency: {
            name: AVALANCHE,
            symbol: AVAX,
            decimals: 18,
        },
        rpcUrls: [AVALANCHE_CHAIN_RPC_URL],
        blockExplorerUrls: [AVALANCHE_TEST_NET_BLOCK_EXPLORER],
        iconUrls: [""],

    }],
}


export const ConnectWalletButton = ({appBar}) => {

    const {
        isAuthenticating,
        isAuthenticated,
        logout,
        authenticate,
        account,
        isLoggingOut,
    } = useMoralis();

    const dispatch = useDispatch();

    const style = appBar ? appBarStyle : otherStyle;

    const addAvalancheTestnetNetwork = async (ethereum) => {
        try {
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{chainId: AVALANCHE_TEST_NETWORK_ID_HEX}], // Hexadecimal version of 80001, prefixed with 0x
            });
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await ethereum.request(AVALANACHE_TEST_NET_CONFIG);
                } catch (addError) {
                    console.log('Did not add network');
                }
            }
        }
    }


    const connectWalletHandler = async () => {
        const ethereum = window.ethereum;
        if (!ethereum || !ethereum.on) {
            console.log("ethereum not installed")
            dispatch(setMetamaskAlert({error: true, type: METAMASK_NOT_INSTALLED}))
            return
        }
        if (ethereum.networkVersion !== AVALANCHE_TEST_NETWORK_ID) {
            await addAvalancheTestnetNetwork(ethereum)
        }
        try {
            await authenticate({
                    onSuccess: async (user) => {
                        dispatch(setAccount(account));
                        dispatch(setConnection(true));
                        dispatch(setBalance())
                    },
                }
            );
        } catch (e) {
            console.log(e)
        }

    }

    const logOutHandler = async () => {
        console.log("logging out")
        try {
            await logout();
            dispatch(setAccount(''));
            dispatch(setConnection(false));
            dispatch(resetBalance())
            dispatch(resetInput())
        } catch (e) {
        }
    }

    if (isAuthenticated && account) {
        let textOnButton;
        if (account) {
            const textOnButtonStart = account.slice(2, 6)
            const textOnButtonEnd = account.slice(-4)
            textOnButton = `${textOnButtonStart}...${textOnButtonEnd}`
        }
        return (
            <Button type="primary" style={style} danger icon={<WalletOutlined/>} size={'large'} onClick={logOutHandler}>
                {textOnButton}
            </Button>
        )
    } else if (isAuthenticating) {
        return (
            <Button type="primary" style={style} danger icon={<WalletOutlined/>} size={'large'} loading>
                authenticating
            </Button>
        )
    } else if (isLoggingOut) {
        return (
            <Button type="primary" style={style} danger icon={<WalletOutlined/>} size={'large'} loading>
                logging out
            </Button>
        )
    } else {
        return (
            <Button type="primary" style={style} danger icon={<WalletOutlined/>} size={'large'}
                    onClick={connectWalletHandler}>
                Connect Wallet
            </Button>
        )
    }

}
