import type { NextApiRequest, NextApiResponse } from 'next'
import {Book, BookProperty, BookQuery} from './types'
import {compare, takeInt, takeString, firstOrOnly, isKeyOf, isInteger} from '@utility/api' 
import { booksList } from './data';
import mysql from 'mysql2/promise';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{total:number, data: Book[]}>
) {
    const query = formValidQuery(req);
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'library',
        password: 'bit',
        database: 'library'
    })

    res.status(200).json({
        total: getBooksTotal(),
        data: await getBooks(connection, query)//getBooks(query.page, query.sort, query.sortOrder, query.limit)
    })
}

function formValidQuery(request: NextApiRequest): BookQuery {
    let queryObject: BookQuery = {
        page: 1,
        sort: 'book_id',
        sortOrder: 'desc',
        limit: 10
    }
    if(request.query.page && isInteger(request.query.page)) {
        queryObject.page = takeInt(request.query.page);
    }
    if(request.query.sort && isKeyOf(BookProperty, request.query.sort)) {
        queryObject.sort = takeString(request.query.sort) as BookProperty;
    }
    if(request.query.sortOrder && ['asc', 'desc'].includes(firstOrOnly(request.query.sortOrder))) {
        queryObject.sortOrder = takeString(request.query.sortOrder) as 'desc' | 'asc';
    }
    if(request.query.limit && isInteger(request.query.limit)) {
        queryObject.limit = takeInt(request.query.limit);
    }

    return queryObject;
}

async function getBooks(connection: mysql.Connection, query: BookQuery): Promise<Book[]>{
    const [rows, fields] = await connection.execute(
        `select * from book ORDER BY ? LIMIT ? OFFSET ?`,
        [query.sort + ' ' + query.sortOrder, query.limit, (query.page-1)*query.limit])
    return (rows as any[]).map(r => {
        return {
            [BookProperty.book_id]: r.book_id,
            [BookProperty.title]: r.title,
            [BookProperty.genre]: r.genre_id,
            [BookProperty.release_year]: r.release_year,
        }
    });
}

function getBooksTotal() {
    return booksList.length;
}