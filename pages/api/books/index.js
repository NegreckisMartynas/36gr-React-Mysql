import {BookProperty} from './types'
import {compare, takeInt, takeString, firstOrOnly, isKeyOf, isInteger} from '@utility/api' 
import { booksList } from './data';

export default function handler(req, res) {
    const query = formValidQuery(req);
    res.status(200).json({
        total: getBooksTotal(),
        data: getBooks(query.page, query.sort, query.sortOrder, query.limit)
    })
}

function formValidQuery(request) {
    let queryObject = {
        page: 1,
        sort: 'book_id',
        sortOrder: 'desc',
        limit: 10
    }
    if(request.query.page && isInteger(request.query.page)) {
        queryObject.page = takeInt(request.query.page);
    }
    if(request.query.sort && isKeyOf(BookProperty, request.query.sort)) {
        queryObject.sort = takeString(request.query.sort);
    }
    if(request.query.sortOrder && ['asc', 'desc'].includes(firstOrOnly(request.query.sortOrder))) {
        queryObject.sortOrder = takeString(request.query.sortOrder);
    }
    if(request.query.limit && Number.isInteger(request.query.limit)) {
        queryObject.limit = takeInt(request.query.limit);
    }

    return queryObject;
}

function getBooks(page, sort, sortOrder, limit) {
    return booksList
            .sort((a,b) => sortOrder === 'desc' ? compare(a[sort], b[sort]): - compare(a[sort], b[sort]))
            .slice(limit * (page-1), limit * page);
}

function getBooksTotal() {
    return booksList.length;
}