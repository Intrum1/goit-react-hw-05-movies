import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { routes } from '../routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.Movies} element={<Movies />} />
      </Route>
    </Routes>
  );
};
