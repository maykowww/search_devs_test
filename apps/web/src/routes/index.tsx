import { createBrowserRouter } from 'react-router-dom';
import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
  },
  {
    path: '/profile/:userName',
    element: <Profile />,
  },
]);

export default router;
