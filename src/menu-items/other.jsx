// assets
import { IconBrandChrome, IconHelp, IconUserX, IconReplace, IconUsers, IconCalendarStats, } from '@tabler/icons';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// constant
const icons = { IconBrandChrome, IconHelp, IconUserX, IconReplace, IconUsers, IconCalendarStats, };
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const other = {
    id: 'options',
    title: 'Options',
    type: 'group',
    children: [
        {
            id: 'remove-member',
            title: 'Remove Member',
            type: 'item',
            url: 'pages/remove-member',
            icon: icons.IconUserX,
            breadcrumbs: false
        },
        {
            id: 'change-member',
            title: 'Change Members ',
            type: 'item',
            url: 'pages/change-member',
            icon: icons.IconReplace,
            breadcrumbs: false

        },
        {
            id: 'start-new-month',
            title: 'Start New Month',
            type: 'item',
            url: 'pages/start-new-month',
            icon: icons.IconCalendarStats,
            breadcrumbs: false

        },
        {
            id: 'active-month-details',
            title: 'Active Month Details',
            type: 'item',
            url: 'pages/active-month-details',
            icon: AccessAlarmsIcon,
            breadcrumbs: false

        }

    ]
};

export default other;
