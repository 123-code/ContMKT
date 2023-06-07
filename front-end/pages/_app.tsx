import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider>
      <LayoutWrapper>
      <ThemeProvider>
      <Component {...pageProps} />
        </ThemeProvider>  
    </LayoutWrapper>
     </NextUIProvider>
  )
 
  
}
