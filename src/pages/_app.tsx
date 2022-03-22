import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { QrCodesProvider } from '../hooks/useQrCodes'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <QrCodesProvider>
      <Header />
      <Component {...pageProps} />
    </QrCodesProvider>
  )
}


export default MyApp
