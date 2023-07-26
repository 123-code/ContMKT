import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum,goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { infuraProvider } from 'wagmi/providers/infura'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum,goerli],
  [
    infuraProvider({ apiKey:'https://goerli.infura.io/v3/682c39bac1294baeb74ae767786db1ca'})
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>

  )

   
}
