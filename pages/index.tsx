import type { NextPage } from 'next'
import Head from 'next/head'
import Table from '../components/Table'
import Header from '@components/Header'
import {params} from '@utility/url';
import React from 'react'
import {BookQuery, BookProperty} from '@api/books/types'
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
    {label: "ID", column: "book_id"}, 
    {label: "Pavadinimas", column: "title"}, 
    {label: "Žanras", column: "genre"},
    {label: "Leidimo data", column: "releaseYear"}
  ]
}

type DataTableState = {
  query: BookQuery,
  data: object[]
}

export default Main