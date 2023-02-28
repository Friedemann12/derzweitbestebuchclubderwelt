import Head from 'next/head'
import Navigation from "./components/navigation"
import BookCarousell from './components/bookcarousell'

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
          <Navigation title='Home'>
          </Navigation>
          <BookCarousell/>
        </div>
      </main>
    </>
  )
}
