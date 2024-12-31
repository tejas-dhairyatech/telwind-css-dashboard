import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoute from './MainRoute';
//import LoginRoutes from './LoginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([MainRoute], { basename: import.meta.env.APP_BASE_NAME });

export default router;