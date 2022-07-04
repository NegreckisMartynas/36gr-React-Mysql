// export type Genre = {
// 	[GenreProperty.genre_id]: number;
// 	[GenreProperty.name]: string;
// 	[GenreProperty.books_in_genre]: number;
// }

export const GenreProperty = {
    genre_id: 'genre_id',
    name: 'name',
    books_in_genre: 'books_in_genre',
}

// export type GenreQuery = {
//     page: number,
//     sort: keyof typeof GenreProperty,
//     sortOrder: 'desc' | 'asc',
//     limit: number
// }