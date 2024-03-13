import { lazy } from 'react';

// project imports
import CreateMember from '../views/pages/AddNewMember/CreateMember';
import MainLayout from '../layout/MainLayout';

// login option 3 routing
// const CreateMember = Loadable(lazy(() => import('../views/pages/AddNewMember/CreateMember')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PagesRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'meal',
            children: [
                {
                    path: '/meal/add-new-member',
                    element: <CreateMember />,
                },
            ],
        },
    ],
};

export default PagesRoutes;