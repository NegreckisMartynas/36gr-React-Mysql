type TableData = {
    headers?: TableHeaders,
    body: TableBody,
}

type TableHeaders = {
    label: string,
    column: string
}[]

type TableBody = object[];
    



export default (props: TableData) => {
    return  <div className="border-2 border-slate-700/50 rounded-t-md inline-block lg:w-[1024px]">
                <table className="w-full">
                    {header(props?.headers)}
                    {body(props)} 
                </table>
            </div>
}

const header = (headers?: TableHeaders)  => {
    if(headers) {
        return <thead >
                    <tr key={headers.toString()}>
                        {headers.map(col =>
                            <th key={col.label} className="px-2 border-b-2 border-r last:border-r-0 border-slate-700/50  bg-slate-300/50">
                                {col.label}
                            </th>
                        )}
                    </tr>
                </thead>
    }
    return;
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
                    <td key={[i, col].toString()} className="border-x first:border-r last:border-l border-slate-300/50 px-2">
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
