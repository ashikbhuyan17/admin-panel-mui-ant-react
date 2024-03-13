// assets
import { IconBuildingSkyscraper } from '@tabler/icons';

// constant
const icons = { IconBuildingSkyscraper };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Appointments = {
    id: 'appointments',
    title: 'Appointments',
    type: 'group',
    children: [
        {
            id: 'appointments',
            title: 'Appointments',
            type: 'item',
            url: '/appointments',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: false,
        },
    ],
};

export default Appointments;
