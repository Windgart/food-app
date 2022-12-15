import AppLogo from '@/components/AppLogo';
import MainMenu from '@/components/MainMenu';
import { Flex } from '@mantine/core';

function Header() {
  return (
    <Flex direction='column' justify='center'>
      <AppLogo appName='FOOD APP' />
      <MainMenu />
    </Flex>
  );
}

export default Header;
