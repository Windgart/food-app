import MenuIcon from '@/assets/images/menu.png';
import ComboIcon from '@/assets/images/fast-food.png';
import ReservationIcon from '@/assets/images/phone-food.png';
import { ROUTES } from '@/utils/constants';

export const options = [
  {
    id: 1,
    name: 'Home',
    to: ROUTES.home,
    image: MenuIcon,
  },
  {
    id: 2,
    name: 'Menu',
    to: ROUTES.menu,
    image: MenuIcon,
  },
  {
    id: 3,
    name: 'My favorites',
    to: ROUTES.myFavorites,
    image: ComboIcon,
  },
  {
    id: 4,
    name: 'My orders',
    to: ROUTES.myOrders,
    image: ReservationIcon,
  },
];
