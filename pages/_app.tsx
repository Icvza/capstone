import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </div>
  )
}
