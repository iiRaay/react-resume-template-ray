import React, { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";

export const ConnectWallet: React.FC = () => {
    const { activateBrowserWallet, account, deactivate } = useEthers(); // Get account info and deactivate function
    const [balance, setBalance] = useState<string | null>(null); // State to hold the balance

    const handleWallet = async () => {
        console.log("Activating Wallet");
        await activateBrowserWallet(); // Activate the wallet
        console.log("Wallet Activated");
    };

    const handleDisconnect = () => {
        console.log("Disconnecting Wallet");
        deactivate(); // Clear the account and disconnect
        setBalance(null); // Clear the balance
        console.log("Wallet Disconnected");
    };

    useEffect(() => {
        const fetchBalance = async () => {
            if (account) {
                console.log("Fetching balance for account:", account);
                try {
                    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
                    const balanceBigNumber = await provider.getBalance(account); // Fetch balance
                    const balanceInEth = ethers.utils.formatEther(balanceBigNumber); // Convert to ETH
                    setBalance(balanceInEth); // Update state with the balance
                } catch (error) {
                    console.error("Error fetching balance:", error);
                    setBalance(null); // Reset balance if there's an error
                }
            }
        };

        fetchBalance(); // Call the function to fetch balance
    }, [account]); // Effect runs when account changes

    return (
        <div>
            {!account ? (
                <button 
                    className="text-neutral-100 hover:transition-colors hover:duration-300 focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500"
                    id="connect-wallet" 
                    onClick={handleWallet}>
                        Connect Wallet
                </button>
            ) : (
                <div className="text-neutral-100 hover:transition-colors hover:duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 sm:hover:text-blue-500">
                    {balance !== null ? `${balance}ETH\t` : "Loading balance..."}
                    {account.slice(0, 4) + "..." + account.slice(-4) + "  "}
                    <button 
                        className="text-neutral-100 hover:transition-colors hover:duration-300 focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500"
                        id="disconnect-wallet" 
                        onClick={handleDisconnect}>
                            Disconnect
                    </button>
                </div>
            )}
        </div>
    );
};
