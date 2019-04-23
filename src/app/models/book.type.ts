export interface Book {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    characters: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: Date;
}