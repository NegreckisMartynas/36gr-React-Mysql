import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Table from '../components/Table'
import Header from '@components/Header'
import {params} from '@utility/url';
import { render } from 'react-dom'
import React from 'react'
import {BookQuery, BookProperty} from '@api/books/types'


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
        <DataTable></DataTable>
      </div>
    </main>
  )
}

type DataTableState = {
  query: BookQuery,
  data: object[]
}

class DataTable extends React.Component<{}, DataTableState> {
  constructor() {
    super({});
    this.state = {
      query: {
        sort: 'title'
      } as BookQuery,
      data: []
    }
  }

  componentDidMount() {
    fetch('/api/books' + params(this.state.query))
        .then(res => res.json())
        .then(data => this.setState({...this.state, data: data}))
  }

  headers() {
    return [
      {label: "ID", column: "book_id"}, 
      {label: "Pavadinimas", column: "title"}, 
      {label: "Žanras", column: "genre"},
      {label: "Leidimo data", column: "releaseYear"}
    ]
  }

  render() {
    return <Table 
              headers={this.headers()}
              body={this.state.data}
              onSort={(s) => { 
                fetch('/api/books' + params({sort: s.column, sortOrder: s.order}))
                  .then(res => res.json())
                  .then(data => this.setState({...this.state, data}))
              }}
    ></Table>
  }

  sort = (s: {column: keyof typeof BookProperty, order: 'asc' | 'desc'}) => {
    this.setState({...this.state, query: {...this.state.query, sort: s.column, sortOrder: s.order}})
    this.fetchData();
  } 

  fetchData = () => {
    fetch('/api/books' + params(this.state.query))
        .then(res => res.json())
        .then(data => this.setState({...this.state, data: data}))
  }
}

export default Main