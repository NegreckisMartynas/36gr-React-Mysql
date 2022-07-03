import type { NextApiRequest, NextApiResponse } from 'next'
import {Author, AuthorProperty, AuthorQuery} from './types'
import {compare, takeInt, takeString, firstOrOnly, isKeyOf, isInteger} from '@utility/api' 
import authorsList from './data';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{total:number, data: Author[]}>
) {
    const query = formValidQuery(req);
    res.status(200).json({
        total: getBooksTotal(),
        data: getAuthors(query.page, query.sort, query.sortOrder, query.limit)
    })
}

function formValidQuery(request: NextApiRequest): AuthorQuery {
    let queryObject: AuthorQuery = {
        page: 1,
        sort: 'author_id',
        sortOrder: 'desc',
        limit: 10
    }
    if(request.query.page && isInteger(request.query.page)) {
        queryObject.page = takeInt(request.query.page);
    }
    if(request.query.sort && isKeyOf(AuthorProperty, request.query.sort)) {
        queryObject.sort = takeString(request.query.sort) as AuthorProperty;
    }
    if(request.query.sortOrder && ['asc', 'desc'].includes(firstOrOnly(request.query.sortOrder))) {
        queryObject.sortOrder = takeString(request.query.sortOrder) as 'desc' | 'asc';
    }
    if(request.query.limit && Number.isInteger(request.query.limit)) {
        queryObject.limit = takeInt(request.query.limit);
    }

    return queryObject;
}

function getAuthors(page: number, sort: keyof typeof AuthorProperty, sortOrder: 'desc' | 'asc', limit: number) {
    return authorsList
            .sort((a:Author,b:Author) => sortOrder === 'desc' ? compare(a[sort], b[sort]): - compare(a[sort], b[sort]))
            .slice(limit * (page-1), limit * page);
}

function getBooksTotal() {
    return authorsList.length;
}