import { Users } from '@/features/users';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      protected
      <Outlet />
    </div>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [{ path: 'users', element: <Users /> }],
  },
];
