import Head from 'next/head'
import Navigation from "./components/navigation"

export async function getServerSideProps() {
  try {
    const res = await fetch(`http://localhost:3000/api/getAllBooks`);
    const data = await res.json();
    const listOfBooks: Array<Book> = []
    data.forEach((element: { id: string; name: string; author: string; klappentext: string; imagePath: string; releaseDate: Date }) => {

      var book: Book = {
        id: element.id,
        name: element.name,
        author: element.author,
        klappentext: element.klappentext,
        releaseDate: element.releaseDate,
        imagePath: element.imagePath
      }
      listOfBooks.push(book)
    });
    return { props: { listOfBooks } }
  } catch (err) {
    console.log(err);
  }
}

type Props = {
  listOfBooks?: Array<Book>
}

export default function Home({ listOfBooks }: Props) {
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
              {listOfBooks?.map((item, index) => {
                return (
                  <div>
                    <li className='flex flex-row justify-evenly items-center'>
                      <img src={item.imagePath} className='w-bookPicto h-bookPicto'></img>
                      <p className='text-2xl'>{item.name}</p>
                    </li>
                    <hr className="border-8 border-black" />
                  </div>
                )
              })}
            </ol>
          </div>
        </div>
      </main>
    </>
  )
}