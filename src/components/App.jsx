import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { routes } from '../routes';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

// const HomePage = lazy(() => import{routes.Home});
// const MoviesPage = lazy(() => import('pages/Home'));
// const MovieDetailsPage = lazy(() => import('pages/Home'));
// const CastPage = lazy(() => import('pages/Home'));
// const ReviewsPage = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<Header />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={routes.Movies}
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path={routes.MovieDetails}
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path={routes.Cast}
          element={
            <Suspense fallback={<Loader />}>
              <Cast />
            </Suspense>
          }
        />
        <Route
          path={routes.Reviews}
          element={
            <Suspense fallback={<Loader />}>
              <Reviews />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={routes.Home} replace />} />
    </Routes>
  );
};
