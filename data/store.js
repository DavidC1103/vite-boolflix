import {reactive} from "vue";

export const store = reactive({
    
  apiMostPop:'https://api.themoviedb.org/3/movie/popular?api_key=184e820e32cadab24e0fe3a59c9aca6a&language=it-IT&page=1',
  arrPop: [],
  apiAllMovies:'https://api.themoviedb.org/3/search/movie?api_key=184e820e32cadab24e0fe3a59c9aca6a&language=it-IT',
  arrAllMovies: [],
  apiAllSeries:'https://api.themoviedb.org/3/search/tv?api_key=184e820e32cadab24e0fe3a59c9aca6a&language=it-IT',
  arrAllSeries:[],
  searchMovie:'',
  apiTopRated:'https://api.themoviedb.org/3/movie/top_rated?api_key=184e820e32cadab24e0fe3a59c9aca6a&language=it-IT',
  arrTopRated:[]


    
})