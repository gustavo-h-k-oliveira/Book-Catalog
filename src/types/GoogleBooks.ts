export interface GoogleBooksVolume {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        publishedDate?: string;
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
        categories?: string[];
        language?: string;
        industryIdentifiers?: Array<{
            type: string;
            identifier: string;
        }>;
        pageCount?: number;
        publisher?: string;
    };
}