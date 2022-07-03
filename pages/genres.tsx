import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import {GenreProperty} from '@api/genres/types'
import FetchTable from '@components/FetchTable'

const Authors: NextPage = () => {
  return (
    <main>
      <Head>
         <title>Biblioteka</title>
         <meta name="description" content="Bibliotekos puslapis, naudojantis React ir MySQL" />
         <link rel="icon" href="/favicon.ico" />
      </Head> 

      <Header></Header>
      <div className='flex flex-col p-2 items-center'>
        <h2 className='text-2xl font-bold mb-2'>Žanrai</h2>
        <FetchTable endpoint='/api/genres' headers={headers()}></FetchTable>
      </div>
    </main>
  )
}

function headers() {
  return [
    {label: "ID", column: GenreProperty.genre_id}, 
    {label: "Žanras", column: GenreProperty.name}, 
    {label: "Knygų skaičius", column: GenreProperty.books_in_genre}
  ]
}

export default Authors