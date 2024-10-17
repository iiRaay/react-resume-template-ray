export const isBrowser = typeof window !== 'undefined';
export const isMobile = isBrowser ? window.matchMedia('(pointer: coarse)').matches : false;
export const canUseDOM: boolean =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined';
export const isApple: boolean = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

export const networkConfig = {
  networks: [
    {
      chainId: 1,
      chainName: "Ethereum Mainnet",
      rpcUrl: "https://cloudflare-eth.com/",
      nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
      },
      blockExplorerUrl: "https://etherscan.io/",
      multicallAddress: "0xeefba1e63905e0088fda26f2c5d6f2696c8b1f7a",
      isTestChain: false,
      isLocalChain: false,
      getExplorerAddressLink: (address: string) => `https://etherscan.io/address/${address}`,
      getExplorerTransactionLink: (transactionHash: string) => `https://etherscan.io/tx/${transactionHash}`,
    },
  ],
};
