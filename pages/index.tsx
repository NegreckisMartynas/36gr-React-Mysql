import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import React from 'react'
import {BookProperty} from '@api/books/types'
import FetchTable from '@components/FetchTable'

const Main: NextPage = () => {
  return (
    <main>
      <Head>
         <title>Biblioteka</title>
         <meta name="description" content="Bibliotekos puslapis, naudojantis React ir MySQL" />
         <link rel="icon" href="/favicon.ico" />
      </Head> 

      <Header></Header>
      <div className='flex flex-col p-2 items-center'>
        <h2 className='text-2xl font-bold mb-2'>Knygos</h2>
        <FetchTable endpoint='/api/books' headers={headers()}></FetchTable>
      </div>
    </main>
  )
}

function headers() {
  return [
    {label: "ID", column: BookProperty.book_id}, 
    {label: "Pavadinimas", column: BookProperty.title}, 
    {label: "Žanras", column: BookProperty.genre},
    {label: "Leidimo data", column: BookProperty.releaseYear}
  ]
}

export default Main