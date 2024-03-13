import { useRoutes } from 'react-router-dom';

// routes
import PagesRoutes from './PagesRoutes';


// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([PagesRoutes]);
}