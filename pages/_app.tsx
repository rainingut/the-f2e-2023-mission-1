import Layout from '@/components/layout/layout'
import { StyleProvider } from '@/stores/style-context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <StyleProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </StyleProvider>
)}
