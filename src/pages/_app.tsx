import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Cardo } from "next/font/google"

const cardo = Cardo({
  subsets: ['latin'],
  weight: '400'
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cardo.className}>
      <Component {...pageProps} />
    </main>)
}
