// export type Book = {
// 	[BookProperty.book_id]: number;
// 	[BookProperty.title]: string;
// 	[BookProperty.genre]: string | null;
// 	[BookProperty.releaseYear]: number | null; 
// }

export const BookProperty = {
    book_id: 'book_id',
    title: 'title',
    genre: 'genre',
    releaseYear: 'releaseYear'   
}

// export type BookQuery = {
//     page: number,
//     sort: keyof typeof BookProperty,
//     sortOrder: 'desc' | 'asc',
//     limit: number
// }