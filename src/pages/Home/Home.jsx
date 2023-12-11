// import { Container } from 'components/App.styled';
import React, { useEffect, useState } from 'react';
import { fetchTrendingList } from '../../components/service/servise';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await fetchTrendingList();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

 

  return (
    <div>
      {isLoading && <Loader />}

      {error && (
        <h2>Oops! Something went wrong! Please try reloading this page!</h2>
      )}
      {movies.length > 0 && <MoviesList items={movies} />}
    </div>
  );
};

export default Home;
