import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import {AuthorProperty} from '@api/authors/types'
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
        <h2 className='text-2xl font-bold mb-2'>Autoriai</h2>
        <FetchTable endpoint='/api/authors' headers={headers()}></FetchTable>
      </div>
    </main>
  )
}

function headers() {
  return [
    {label: "ID", column: AuthorProperty.author_id}, 
    {label: "Autorius", column: AuthorProperty.name}, 
    {label: "Parašyta knygų", column: AuthorProperty.books_count}
  ]
}

export default Authors