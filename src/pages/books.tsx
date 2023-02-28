import Head from 'next/head'
import Navigation from "./components/navigation"
import Book from './components/bookcarousell'

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
          <Navigation title='Bücher'></Navigation>
          <div className='w-full flex flex-col items-center'>
            <ol className='pt-20 w-8/12'>
              <li className='flex flex-row justify-evenly items-center'>
                <img src='test.jpg' className='w-bookPicto h-bookPicto'></img>
                <p className='text-2xl'>Der Besuch der alten Dame - Dürrenmatt</p>
              </li>
              <hr className="border-8 border-black"/>
            </ol>
          </div>
        </div>
      </main>
    </>
  )
}