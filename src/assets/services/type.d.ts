type ResponseMovie = {
    dates: Dates
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  type Dates = {
    maximum: string
    minimum: string
  }
  
  type Movie = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  interface DetailMovie extends Movie {
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    imdb_id: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
   }
  
  type Genre = {
    id: number
    name: string
  }
  
  type ProductionCompany = {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  type ProductionCountry = {
    iso_3166_1: string
    name: string
  }
  
  type SpokenLanguage = {
    english_name: string
    iso_639_1: string
    name: string
  }

  type ResponseTv = {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  type Tv = {
    backdrop_path?: string
    first_air_date: string
    genre_ids: number[]
    id: number
    name: string
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
  }

  export type { DetailMovie,ResponseMovie, Dates, Movie, ResponseTv, Tv, ResponseTopRate}
  
  type ResponseTopRate = {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  type TopRate = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  

   type ResponseDetail = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  type GenreDetail = {
    id: number
    name: string
  }
  
  type ProductionCompanyDetail = {
    id: number
    logo_path?: string
    name: string
    origin_country: string
  }
  
  type ProductionCountryDetail = {
    iso_3166_1: string
    name: string
  }
  
  type LanguageDetail = {
    english_name: string
    iso_639_1: string
    name: string
  }