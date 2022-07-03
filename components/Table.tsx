import React from "react";
import OpenIconic from "@components/OpenIconic"

type Sort = {column: string, order: 'desc' | 'asc'}  

type TableData = {
    headers?: TableHeaders,
    body: TableBody,
    onSort?: (s: Sort) => void
}

type TableHeaders = TableHeaderCol[]

type TableHeaderCol = {
    label: string,
    column: string
}

type TableBody = object[];

type TableState = {
    sort?: Sort
}

export default class Table extends React.Component<TableData, TableState> {
    constructor(props: TableData) {
        super(props);
        this.state = {};
    }

    sortForCol = (col: TableHeaderCol) => {
        const onSort = this.props.onSort ?? (_ => {});
        let currentSort = this.state.sort;
        return () => {
            if(currentSort?.column !== col.column || currentSort?.order !== 'desc') {
                currentSort = {column: col.column, order: 'desc'}
            }
            else {
                currentSort = {column: col.column, order: 'asc'}
            }
            this.setState({...this.state, sort: currentSort})
            onSort(currentSort);
        }
    } 

    render() {
        return  <div className="border-2 border-slate-700/50 rounded-t-md inline-block w-full lg:w-[1024px]">
        <table className="w-full">
            {header(this.props, this.sortForCol, this.state.sort)}
            {body(this.props)} 
        </table>
    </div>
    }
}

const header = (props: TableData, sortForCol: (col: TableHeaderCol) => () => void, sort?: Sort )  => {
    if(props.headers) {
        return <thead >
                    <tr key="head">
                        {props.headers.map(col =>
                            headerCol(col, sortForCol, sort)
                        )}
                    </tr>
                </thead>
    }
    return;
}

const headerCol = (
        col: TableHeaderCol, 
        sortForCol: (col: TableHeaderCol) => () => void, 
        sort?: Sort) => {
    return (
        <th key={col.column+col.label} 
            className={`px-2 border-b-2 border-r last:border-r-0 border-slate-700/50  bg-slate-300/50 
            ${sort?.column === col.column ? 'text-blue-500': ''}`}
            onClick={sortForCol(col)}>
            {col.label} {sortIcon(sort, col.column)}
        </th>
    )
}

const sortIcon = (sort: Sort | undefined, column: string) => {
    if(sort && sort.column === column) {
        return sort.order === 'desc' ? 
                <OpenIconic className="inline-block w-4 h-4" 
                            name="sort-descending" 
                            iconClassName="fill-blue-500"></OpenIconic> :
                <OpenIconic className="inline-block w-4 h-4" 
                            name="sort-ascending" 
                            iconClassName="fill-blue-500"></OpenIconic>
    }
}

const body = (props: TableData) => {
    const orderRow = props.headers ? orderByHeader(props.headers) : coerceToNaturalOrderOfFirst(props.body);
    return <tbody>
                {props.body.map((rowObject) => row(orderRow(rowObject)))}
            </tbody>
}

const row = (rowData: any[]) => {
    return  <tr key={rowData.toString()} className="bg-slate-100/50 even:bg-slate-200/50 hover:bg-slate-400/50 border-y last:border-t">
                {rowData.map( (col, i) => 
                    <td key={i} className="border-x first:border-r last:border-l border-slate-300/50 px-2">
                        {col}
                    </td>
                )}
            </tr>
}

const orderByHeader = (header: TableHeaders) => {
    const map = header.map(h => h.column)
    return createMappingFunction(map);
}

const coerceToNaturalOrderOfFirst = (data: TableBody) => {
    const map = data.length ? Object.getOwnPropertyNames(data[0]) : null;
    return map ? createMappingFunction(map) : (_: any) => []
}

const createMappingFunction = (map:string[])  => (row: any) => map.map(m => row[m]);