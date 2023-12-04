import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { useState } from 'react';
import { protectedRoutes } from './protected';

export const AppRoutes = () => {
  const [auth] = useState(true);
  const routes = auth ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes]);
  return <>{element}</>;
};
