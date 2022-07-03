import { params } from "@utility/url";
import React from "react";
import Table from '@components/Table'
import Paginator from "@components/Paginator";

type FetchTableState = {
  query: Query,
  data: object[],
  total: number
}

type Query = {
  page: number,
  sort?: string,
  sortOrder?: 'desc' | 'asc',
  limit: number
}

type FetchTableProps = {
  endpoint: string;
  headers: {label: string, column: string}[]
}
  
export default class FetchTable extends React.Component<FetchTableProps, FetchTableState> {
  constructor(props: FetchTableProps) {
    super(props);
    this.state = {
      query: {
        page: 1,
        limit: 10
      },
      data: [],
      total: 0
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  headers = () => {
    return this.props.headers;
  }

  render() {
    return (
      <div>
        <Table 
          headers={this.headers()}
          body={this.state.data}
          onSort={this.sort}
        ></Table>
        <Paginator active={this.state.query.page ?? 1} 
                   total={Math.ceil(this.state.total/this.state.query.limit)} 
                   onPageClick={this.page}></Paginator>
      </div>
    )
  }

  sort = (s: {column: string, order: 'asc' | 'desc'}) => {
    this.setState(
      {...this.state, query: {...this.state.query, sort: s.column, sortOrder: s.order}}, 
      this.fetchData)
    ;
  }

  page = (page: number) => {
    this.setState(
      {...this.state, query: {...this.state.query, page}}, 
      this.fetchData)
  }

  fetchData = () => {
    fetch(this.props.endpoint + params(this.state.query))
        .then(res => res.json())
        .then(res => {
          this.setState(old => {
            return {...old, data: res.data, total: res.total}
          })
        })
  }
}