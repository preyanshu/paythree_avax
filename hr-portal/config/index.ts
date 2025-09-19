import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
// import { Chain } from 'wagmi'

// Load env
export const projectId = "123456";

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const SomniaTestnet = {
  id: 50312,
  name: 'Somnia Testnet',
  network: 'somnia-testnet',
  nativeCurrency: {
    name: 'STT',
    symbol: 'STT',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://dream-rpc.somnia.network'],
    },
    public: {
      http: ['https://dream-rpc.somnia.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Somnia Testnet Explorer',
      url: 'https://shannon-explorer.somnia.network/',
    },
  },
}

export const network = SomniaTestnet
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  networks: [network],
  projectId,
})

// Export Wagmi config
export const config = wagmiAdapter.wagmiConfig
