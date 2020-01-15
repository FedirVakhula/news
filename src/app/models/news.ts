export interface INews {
    status: string;
    totalResults: number;
    articles: Array<Iarticles>;
}

export interface Iarticles {
    source: {};
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: null;
    publishedAt: string;
    content: string;
}
