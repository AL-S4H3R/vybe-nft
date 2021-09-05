import { Magic } from 'magic-sdk'

// @ts-ignore
const apiKey: string = process.env.REACT_APP_MAGIC_API_KEY

export const magic = new Magic(apiKey, {
	network: {
		rpcUrl: 'https://alfajores-forno.celo-testnet.org'
	}
});
