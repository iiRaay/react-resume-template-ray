import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";


export const ConnectWallet: React.FC = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers();
    const [balance, setBalance] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false); // Loading state for balance fetching

    const handleWallet = async () => {
        console.log("Activating Wallet");
        await activateBrowserWallet();
        console.log("Wallet Activated");
    };

    const handleDisconnect = () => {
        console.log("Disconnecting Wallet");
        deactivate();
        setBalance(null);
        console.log("Wallet Disconnected");
    };

    useEffect(() => {
        const fetchBalance = async () => {
            if (account) {
                setLoading(true);
                console.log("Fetching balance for account:", account);
                try {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const balanceBigNumber = await provider.getBalance(account);
                    const balanceInEth = ethers.utils.formatEther(balanceBigNumber);
                    setBalance(balanceInEth.slice(0,5));
                } catch (error) {
                    console.error("Error fetching balance:", error);
                    setBalance(null); // Reset balance if there's an error
                } finally {
                    setLoading(false); // Set loading to false once done
                }
            }
        };

        fetchBalance();
    }, [account]);

    return (
        <div>
            {!account ? (
                <button 
                    className="px-3 rounded-full border-2 bg-none text-neutral-100 hover:transition-colors hover:duration-300 focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500"
                    id="connect-wallet" 
                    onClick={handleWallet}>
                        Connect Wallet
                </button>
            ) : (
                <div>
                    <span className="text-blue-500">
                        {loading 
                            ? "Loading balance..." 
                            : balance !== null 
                                ? `${balance}...ETH ` 
                                : "Balance not available"} 
                    </span>
                    <span className="text-green-500">
                        {account.slice(0, 4) + "..." + account.slice(-4) + " "}
                    </span>
                    <button 
                        className="px-3 rounded-full border-2 bg-none text-neutral-100 hover:transition-colors hover:duration-300 focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500"
                        id="disconnect-wallet" 
                        onClick={handleDisconnect}>
                            Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};
