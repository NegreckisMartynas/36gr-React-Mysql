import { params } from "@utility/url";
import React from "react";
import Table from '@components/Table'

type FetchTableState = {
  query: Query,
  data: object[]
}

type Query = {
  page?: number,
  sort?: string,
  sortOrder?: 'desc' | 'asc',
  limit?: number
}

type FetchTableProps = {
  endpoint: string;
  headers: {label: string, column: string}[]
}
  
export default class FetchTable extends React.Component<FetchTableProps, FetchTableState> {
  constructor(props: FetchTableProps) {
    super(props);
    this.state = {
      query: {},
      data: []
    }
  }

  componentDidMount() {
    fetch(this.props.endpoint + params(this.state.query))
        .then(res => res.json())
        .then(data => this.setState({...this.state, data: data}))
  }

  headers = () => {
    return this.props.headers;
  }

  render() {
    return (
      <Table 
        headers={this.headers()}
        body={this.state.data}
        onSort={this.sort}
      ></Table>
    )
  }

  sort = (s: {column: string, order: 'asc' | 'desc'}) => {
    this.setState({...this.state, query: {...this.state.query, sort: s.column, sortOrder: s.order}})
    this.fetchData();
  } 

  fetchData = () => {
    fetch('/api/books' + params(this.state.query))
        .then(res => res.json())
        .then(data => this.setState({...this.state, data: data}))
  }
}