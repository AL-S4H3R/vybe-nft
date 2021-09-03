import { Magic } from 'magic-sdk'
import { SolanaExtension } from '@magic-ext/solana'

// @ts-ignore
const apiKey: string = process.env.REACT_APP_MAGIC_API_KEY

export const magic = new Magic(apiKey, {
    extensions: [
      new SolanaExtension({
        rpcUrl: 'https://testnet.solana.com',
      }),
    ],
});