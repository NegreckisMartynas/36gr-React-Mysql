export type Book = {
	[BookProperty.book_id]: number;
	[BookProperty.title]: string;
	[BookProperty.genre]: string | null;
	[BookProperty.release_year]: number | null; 
}

export enum BookProperty  {
    book_id = 'book_id',
    title = 'title',
    genre = 'genre',
    release_year = 'release_year'   
}

export type BookQuery = {
    page: number,
    sort: keyof typeof BookProperty,
    sortOrder: 'desc' | 'asc',
    limit: number
}