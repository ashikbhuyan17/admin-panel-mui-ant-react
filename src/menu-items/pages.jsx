// assets
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { IconBrandChrome, IconCurrencyDollar, IconHelp, IconUserPlus, IconUsers } from '@tabler/icons';
// constant
const icons = { IconBrandChrome, IconHelp, IconUserPlus, IconCurrencyDollar, IconUsers };
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'add-new-member',
            title: 'Add New Member',
            type: 'item',
            url: 'meal/add-new-member',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id: 'add-member-money',
            title: 'Add Members Money',
            type: 'item',
            url: 'pages/add-member-money',
            icon: icons.IconCurrencyDollar,
            breadcrumbs: false

        },
        {
            id: 'add-meal',
            title: 'Add Meal',
            type: 'item',
            url: 'pages/add-meal',
            icon: SetMealIcon,
            breadcrumbs: false

        },
        {
            id: 'add-meal-cost',
            title: 'Add Meal Cost',
            type: 'item',
            url: 'pages/add-meal-cost',
            icon: MonetizationOnIcon,
            breadcrumbs: false

        },
        {
            id: 'add-other-meal-cost',
            title: 'Add Other Cost',
            type: 'item',
            url: 'pages/add-other-meal-cost',
            icon: MonetizationOnIcon,
            breadcrumbs: false

        },
        {
            id: 'all-members',
            title: 'All Members',
            type: 'item',
            url: 'pages/all-members',
            icon: icons.IconUsers,
            breadcrumbs: false

        }
    ]
};

export default pages;
