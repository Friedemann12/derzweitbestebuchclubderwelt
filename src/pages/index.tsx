import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from "./components/navigation"
import BookCarousell from './components/bookcarousell'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Der zweitbeste Buchclub der Welt</title>
        <meta name="description" content="Der zweitbeste Buchclub der Welt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex row w-screen'>
          <Navigation>
            <h1 className='text-4xl'>Home</h1>
          </Navigation>
          <BookCarousell/>
        </div>
      </main>
    </>
  )
}
