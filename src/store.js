import { reactive } from "vue";

export const store = reactive({
    apiMovieURL: 'https://api.themoviedb.org/3/search/movie?api_key=6e0396b4a5ee862b25e5f423b1e16154&language=it',
    moviesList: [],
    apiSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=6e0396b4a5ee862b25e5f423b1e16154&language=it',
    seriesList: [],
    searchText: ''
})