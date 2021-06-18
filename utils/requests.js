const API_KEY = process.env.API_KEY;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/trending/top_rated/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: 'Action',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedy: {
    title: 'Comedy',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },

  fetchHorror: {
    title: 'Horror',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomance: {
    title: 'Romance',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchWestern: {
    title: 'Western',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTVMovie: {
    title: 'TV Movie',
    url: `/trending/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
};
