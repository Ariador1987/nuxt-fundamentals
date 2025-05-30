export interface OmdbMovieItem {
    Title: string;
    Year: string;
    imdbID: string;
    Type: "movie" | "series" | "episode";
    Poster: string;
}

export interface OmdbSearchResponse {
    Search: OmdbMovieItem[];
    totalResults: string;
    Response: string;
    Error?: string;
}

export interface OmdbMovieDetail extends OmdbMovieItem {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: {
        Source: string;
        Value: string;
    }[];
    Response: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    DVD?: string;
    BoxOffice?: string;
    Production?: string;
    Website?: string;
}

export interface OmdbErrorResponse {
    Response: "False";
    Error: string;
}
