import { params } from "@utility/url";
import React from "react";
import Table from '@components/Table'
import Paginator from "@components/Paginator";

  
export default class FetchTable extends React.Component {
  constructor(props) {
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

  sort = (s) => {
    this.setState(
      {...this.state, query: {...this.state.query, sort: s.column, sortOrder: s.order}}, 
      this.fetchData)
    ;
  }

  page = (page) => {
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