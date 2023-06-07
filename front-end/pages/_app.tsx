import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutWrapper from '@/Components/LayoutWrapper'
import { ThemeProvider } from 'next-themes'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import  RainbowButton  from './ConnectButton';
import  ETHPayment  from './MakePayment'
import { infuraProvider } from 'wagmi/providers/infura'




const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum,goerli],
  [
    infuraProvider({ apiKey:'https://goerli.infura.io/v3/682c39bac1294baeb74ae767786db1ca'})
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})




export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig client={wagmiClient}>
    <NextUIProvider>
      <LayoutWrapper>
      <ThemeProvider>
      <RainbowKitProvider chains={chains}>
      <Component {...pageProps} />
      </RainbowKitProvider> 
        </ThemeProvider>  
    </LayoutWrapper>
     </NextUIProvider>
     </WagmiConfig>
    
  )
 
  
}
