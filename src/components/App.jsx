import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
// import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { routes } from '../routes';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.Home} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={routes.Movies} element={<Movies />} />
          <Route path={routes.MovieDetails} element={<MovieDetails />}>
            <Route path={routes.Cast} element={<Cast />} />
            <Route path={routes.Reviews} element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={routes.Home} replace />} />
      </Routes>
    </Suspense>
  );
};
