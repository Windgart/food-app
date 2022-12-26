import MenuIcon from '@/assets/images/menu.png';
import ComboIcon from '@/assets/images/fast-food.png';
import ReservationIcon from '@/assets/images/phone-food.png';
import AboutUs from '@/assets/images/courier.png';
import { ROUTES } from '@/utils/constants';

export const options = [
  {
    id: 1,
    name: 'Menu',
    to: ROUTES.home,
    image: MenuIcon,
  },
  {
    id: 2,
    name: 'My favorites',
    to: ROUTES.myFavorites,
    image: ComboIcon,
  },
  {
    id: 3,
    name: 'My orders',
    to: ROUTES.myOrders,
    image: ReservationIcon,
  },
  {
    id: 4,
    name: 'About us',
    to: ROUTES.about,
    image: AboutUs,
  },
];
