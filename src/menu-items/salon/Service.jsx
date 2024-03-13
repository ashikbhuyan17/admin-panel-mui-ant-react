// assets
import { IconDevices } from '@tabler/icons';

// constant
const icons = { IconDevices };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const Services = {
    id: 'services',
    title: 'services',
    type: 'group',
    children: [
        {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '/services',
            icon: icons.IconDevices,
            breadcrumbs: false,
        },
    ],
};

export default Services;
