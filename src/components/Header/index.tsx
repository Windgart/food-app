import AppLogo from '@/components/AppLogo';
import MainMenu from '@/components/MainMenu';
import { Grid } from '@mantine/core';

function Header() {
  return (
    <Grid justify='center' align='center' gutter={0}>
      <Grid.Col sm={12} md={4}>
        <AppLogo appName='FOOD APP' />
      </Grid.Col>
      <Grid.Col sm={12} md={5}>
        <MainMenu />
      </Grid.Col>
    </Grid>
  );
}

export default Header;
