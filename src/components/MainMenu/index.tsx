import { useContext } from 'react';
import { AppContext } from '@/context';
import {
  Flex,
  Text,
  UnstyledButton,
  useMantineTheme,
  Burger,
  Drawer,
  NavLink,
  Indicator,
} from '@mantine/core';
import { useMediaQuery, useToggle } from '@mantine/hooks';
import { options } from './menuConfigs';
import { useNavigate, useLocation } from 'react-router-dom';

function MainMenu() {
  const { breakpoints, colors } = useMantineTheme();
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const [showMobileMenu, toggleMenu] = useToggle();

  const { mealOrders } = useContext(AppContext);

  const { pathname } = useLocation();

  const n = useNavigate();
  const navigate = (url: string) => () => n(url);

  const handleCloseMenu = () => toggleMenu();

  const renderOptions = options.map(({ id, name, to }) => (
    <Indicator label={id === 4 ? mealOrders?.length : ''} inline size={id === 4 ? 14 : 0} key={id}>
      <UnstyledButton
        pb={2}
        px={5}
        sx={{
          borderBottom: `2px solid ${pathname === to ? 'white' : 'transparent'}`,
        }}
        onClick={navigate(to)}
      >
        <Flex direction='row' align='center'>
          <Text ff='Raleway' fw={500} size={15} color='contrast.1'>
            {name}
          </Text>
        </Flex>
      </UnstyledButton>
    </Indicator>
  ));

  return (
    <>
      <Flex justify='center' gap={30}>
        {isTablet ? (
          renderOptions
        ) : (
          <Burger color={colors.contrast[1]} opened={showMobileMenu} onClick={handleCloseMenu} />
        )}
      </Flex>
      <Drawer opened={showMobileMenu} onClose={handleCloseMenu}>
        {options.map((item) => (
          <Flex w='80%' direction='column' key={item?.id}>
            <Indicator
              label={item?.id === 4 ? mealOrders?.length : ''}
              inline
              size={item?.id === 4 ? 18 : 0}
              position='middle-center'
            >
              <NavLink
                active={pathname === item.to}
                onClick={navigate(item.to)}
                variant='light'
                key={item.id}
                label={item.name}
              />
            </Indicator>
          </Flex>
        ))}
      </Drawer>
    </>
  );
}

export default MainMenu;
