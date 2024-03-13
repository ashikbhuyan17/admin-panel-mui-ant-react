
// project imports
import MainLayout from '../layout/MainLayout';
import DashboardPage from '../views/DashboardPage';
import CreateMember from '../views/pages/AddNewMember/CreateMember';
import AppointmentsPage from '../views/pages/AppointmentsPage';
import ServicesPage from '../views/pages/ServicesPage';

// login option 3 routing
// const CreateMember = Loadable(lazy(() => import('../views/pages/AddNewMember/CreateMember')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const PagesRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            children: [
                {
                    path: '/dashboard',
                    element: <DashboardPage />,
                },
            ],
        },
        {
            path: 'services',
            children: [
                {
                    path: '/services',
                    element: <ServicesPage />,
                },
            ],
        },
        {
            path: 'appointments',
            children: [
                {
                    path: '/appointments',
                    element: <AppointmentsPage />,
                },
            ],
        },
        {
            path: 'appointments',
            children: [
                {
                    path: '/appointments',
                    element: <CreateMember />,
                },
            ],
        },
    ],
};

export default PagesRoutes;