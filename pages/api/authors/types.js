// export type Author = {
// 	[AuthorProperty.author_id]: number;
// 	[AuthorProperty.name]: string;
// 	[AuthorProperty.books_count]: number;
// }

export const AuthorProperty = {
    author_id: 'author_id',
    name: 'name',
    books_count: 'books_count',
}

// export type AuthorQuery = {
//     page: number,
//     sort: keyof typeof AuthorProperty,
//     sortOrder: 'desc' | 'asc',
//     limit: number
// }