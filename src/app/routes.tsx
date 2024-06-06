// app/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import homeRoutes from '../features/home/routes'; // Import the home feature's router
// ... import other feature routers as needed

const router = createBrowserRouter([
  ...homeRoutes, // Spread the routes from the home feature router
  // ... spread other feature routers here
]);

export default router;
