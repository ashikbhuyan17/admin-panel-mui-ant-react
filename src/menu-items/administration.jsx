// assets
import { IconBrandChrome, IconCurrencyDollar, IconHelp, IconUserPlus, IconUsers } from '@tabler/icons';
// constant
const icons = { IconBrandChrome, IconHelp, IconUserPlus, IconCurrencyDollar, IconUsers };
// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const administration = {
  id: "administration",
  title: "Administration",
  type: "group",
  icon: icons.IconUserPlus,
  children: [
    {
      id: "administration",
      title: "Administration",
      type: "collapse",
      icon: icons.IconUserPlus,
      children: [
        {
          id: "list-user",
          title: "Users",
          type: "item",
          url: "user/list",
          breadcrumbs: false,
        },
        {
          id: "list-role",
          title: "Roles",
          type: "item",
          url: "role/list",
          breadcrumbs: false,
        },
        {
          id: "soles",
          title: "Soles",
          type: "item",
          url: "sol/list",
          breadcrumbs: false,
        },
        {
          id: "costCenter",
          title: "Cost Centres",
          type: "item",
          url: "/drivers/cost-centre",
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default administration;
