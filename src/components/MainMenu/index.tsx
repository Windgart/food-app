import {
  Flex,
  Text,
  UnstyledButton,
  useMantineTheme,
  Burger,
  Drawer,
  NavLink,
} from '@mantine/core';
import { useMediaQuery, useToggle } from '@mantine/hooks';
import { options } from './menuConfigs';

function MainMenu() {
  const { breakpoints, colors } = useMantineTheme();
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md}px)`);
  const [showMobileMenu, toggleMenu] = useToggle();

  // using window object to change location instead of React Router navigate hook because the menu is out of the provider
  const navigate = (url: string) => () => (window.location.href = url);

  const handleCloseMenu = () => toggleMenu();

  const renderOptions = options.map(({ id, name, to }) => (
    <UnstyledButton key={id} onClick={navigate(to)}>
      <Flex direction='row' align='center'>
        <Text ff='Raleway' fw={500} size={15} color='contrast.1'>
          {name}
        </Text>
      </Flex>
    </UnstyledButton>
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
          <NavLink
            onClick={() => navigate(item.to)}
            variant='filled'
            key={item.id}
            label={item.name}
          />
        ))}
      </Drawer>
    </>
  );
}

export default MainMenu;
