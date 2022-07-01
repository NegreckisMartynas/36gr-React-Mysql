import {booksList} from '../../data';
import type { NextApiRequest, NextApiResponse } from 'next'
import {takeInt, takeString, isKeyOf} from '@utility/api'

type Book = {
	[BookProperty.book_id]: number;
	[BookProperty.title]: string;
	[BookProperty.genre]: string | null;
	[BookProperty.releaseYear]: number | null; 
}

enum BookProperty  {
    book_id = 'book_id',
    title = 'title',
    genre = 'genre',
    releaseYear = 'releaseYear'   
}

type BookQuery = {
    page: number,
    sort: keyof Book,
    limit: number
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Book[]>
) {
    const query = formValidQuery(req);
    console.log(query)
    res.status(200).json(getBooks(query.page, query.sort, query.limit))
}

function formValidQuery(request: NextApiRequest): BookQuery {
    let queryObject = {
        page: 1,
        sort: 'book_id' as BookProperty,
        limit: 20
    }
    console.log(request.query.sort)
    console.log(Object.keys(BookProperty))
    console.log(Object.keys(BookProperty).includes('book_id'))
    if(request.query.page && Number.isInteger(request.query.page)) {
        queryObject.page = takeInt(request.query.page);
    }
    if(request.query.sort && isKeyOf(BookProperty, request.query.sort)) {
        queryObject.sort = takeString(request.query.sort) as BookProperty;
    }
    if(request.query.limit && Number.isInteger(request.query.limit)) {
        queryObject.limit = takeInt(request.query.limit);
    }

    return queryObject;
}

function getBooks(page: number, sort: BookProperty, limit: number) {
    return booksList
            .sort((a:Book,b:Book) => compare(a[sort], b[sort]))
            .slice(limit * (page-1));
}

function compare(a:number|string|null, b:number|string|null): number {
    if(a === null) {
        return -1;
    }
    else if(b === null) {
        return 1;
    }
    else if(typeof(a) === 'number' && typeof(b) === 'number') {
        return a - b;
    }
    else if(typeof(a) === 'string' && typeof(b) === 'string'){
        return a.localeCompare(b);
    }
    else {
        console.error("Can't compare:", a, b);
        return 0;
    }
}