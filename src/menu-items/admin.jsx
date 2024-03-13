/* eslint-disable prettier/prettier */
// assets
import {
  IconAppsFilled,
  IconBrandProducthunt,
  IconBuildingWarehouse,
  IconBusStop,
  IconCalendarDollar,
  IconCash,
  IconDashboard,
  IconGardenCart,
  IconLayoutDistributeHorizontal,
  IconPackage,
  IconTruck,
  IconUser,
  IconUserCircle,
  IconUserStar,
  IconUsers,
} from "@tabler/icons-react";
// constant
const icons = {
  IconDashboard,
  IconAppsFilled,
  IconBusStop,
  IconUser,
  IconTruck,
  IconLayoutDistributeHorizontal,
  IconCash,
  IconGardenCart,
  IconBuildingWarehouse,
  IconUsers,
  IconBrandProducthunt,
  IconPackage,
  IconCalendarDollar,
  IconUserStar,
  IconUserCircle,
};

const Admin =
{
  id: "warehouses",
  title: "warehouses",
  type: "group",
  children: [
    {
      id: "warehouse",
      title: "Warehouse",
      type: "collapse",
      icon: icons.IconBuildingWarehouse,
      children: [
        {
          id: "warehouse-list",
          title: "Warehouse List",
          type: "item",
          url: "/warehouse/list",
          breadcrumbs: false,
        },
      ],
    },
  ],
},

export default Admin;
