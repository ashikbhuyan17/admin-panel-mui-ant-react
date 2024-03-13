
// ==============================|| MENU ITEMS ||============================== //

import administration from "./administration";
import dashboard from "./dashboard";
import Appointments from "./salon/Appointments";
import Services from "./salon/Service";

const menuItems = {
    items: [dashboard, Appointments, Services, administration]
};

export default menuItems;
