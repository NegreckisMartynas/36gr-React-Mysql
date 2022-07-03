import type { NextApiRequest, NextApiResponse } from 'next'
import {Genre, GenreProperty, GenreQuery} from './types'
import {compare, takeInt, takeString, firstOrOnly, isKeyOf, isInteger} from '@utility/api' 
import genresList from './data';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{total:number, data: Genre[]}>
) {
    const query = formValidQuery(req);
    res.status(200).json({
        total: getBooksTotal(),
        data: getGenres(query.page, query.sort, query.sortOrder, query.limit)
    })
}

function formValidQuery(request: NextApiRequest): GenreQuery {
    let queryObject: GenreQuery = {
        page: 1,
        sort: 'genre_id',
        sortOrder: 'desc',
        limit: 10
    }
    if(request.query.page && isInteger(request.query.page)) {
        queryObject.page = takeInt(request.query.page);
    }
    if(request.query.sort && isKeyOf(GenreProperty, request.query.sort)) {
        queryObject.sort = takeString(request.query.sort) as GenreProperty;
    }
    if(request.query.sortOrder && ['asc', 'desc'].includes(firstOrOnly(request.query.sortOrder))) {
        queryObject.sortOrder = takeString(request.query.sortOrder) as 'desc' | 'asc';
    }
    if(request.query.limit && Number.isInteger(request.query.limit)) {
        queryObject.limit = takeInt(request.query.limit);
    }

    return queryObject;
}

function getGenres(page: number, sort: keyof typeof GenreProperty, sortOrder: 'desc' | 'asc', limit: number) {
    return genresList
            .sort((a:Genre,b:Genre) => sortOrder === 'desc' ? compare(a[sort], b[sort]): - compare(a[sort], b[sort]))
            .slice(limit * (page-1), limit * page);
}

function getBooksTotal() {
    return genresList.length;
}