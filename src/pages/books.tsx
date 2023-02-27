import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from "./components/navigation"
import Book from './components/book'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Der zweit beste Buchclub der Welt</title>
        <meta name="description" content="Der zweit beste Buchclub der Welt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex row w-screen'>
          <Navigation>
            <h1 className='text-4xl'>Bücher</h1>
          </Navigation>
        </div>
      </main>
    </>
  )
}