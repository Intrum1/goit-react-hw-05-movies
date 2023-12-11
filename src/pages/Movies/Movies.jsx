import { useEffect, useState } from 'react';
import SearchForm from 'components/SeachForm/SeachForm';
import { fetchMoviesBySearch } from '../../components/service/servise';
import MoviesList from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movieItems, setMovieItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchFormSubmit = query => {
    if (!query) {
      return;
    }
    // setNameMovie(query);
    setSearchParams({ search: query });
  };

  useEffect(() => {
    const value = searchParams.get('search');
    if (!value) return;

    async function getSearchMovies() {
      try {
        setLoading(true);
        const searchMovies = await fetchMoviesBySearch(value);
        setMovieItems(searchMovies);
      } catch (error) {
        window.alert(
          'Oops! Something went wrong! Please try reloading this page!'
        );
      } finally {
        setLoading(false);
      }
    }
    getSearchMovies();
  }, [searchParams]);

  return (
    <>
      {loading && <Loader />}

      <SearchForm onSubmit={handleSearchFormSubmit} />

      {searchParams && <MoviesList items={movieItems} />}
    </>
  );
};

export default Movies;
