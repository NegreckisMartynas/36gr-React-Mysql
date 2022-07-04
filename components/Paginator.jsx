/**
 * 
 * @param {{active: number, total:number, onPageClick: (num:number) => void}} props 
 * @returns 
 */
export default function Paginator(props) {
    return (
        <div className="flex justify-center">
            {buttons(props.active, props.total, props.onPageClick)}
        </div>
    )
} 

function buttons(active, total, onPageClick) {
    const buttons = paginatorRange(active, total).map( (e, i) => {
        if(e === 'skip') return (
            <span key={'skip'+i} className="p-1 w-8 text-center">...</span>
        )
        else return (
            <button key={e}
                    className={`border rounded-b p-1 w-8 ${e === active ? 'text-blue-500 font-bold':''}`}
                    onClick={() => onPageClick(e)}>
                {e}
            </button>
        )
    })

    return buttons;
}
/**
 * 
 * @param {number} active 
 * @param {number} total 
 * @returns {(number|'skip')[]}
 */
function paginatorRange(active, total) {
    let min = active - 2;
    let max = active + 2;
    if( min <= 2 ) min = 1;
    if( max >= total-2 ) max = total;

    let pages = []

    if(min > 1) pages.push(1, 'skip')
    for(let i = min; i <= max; i++) {
        pages.push(i);
    }
    if(max < total) {
        pages.push('skip', total)
    }
    return pages;
} 