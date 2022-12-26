import { ROUTES } from '@/utils/constants';
import { Flex, Text, Title } from '@mantine/core';
import { NavLink } from 'react-router-dom';

function ErrorPage() {
  return (
    <Flex direction='column' align='center' bg='secondary.1' py={200}>
      <Title py={30} size='h1'>
        Oops!
      </Title>
      <Text>
        Something went wrong, return to the homepage <NavLink to={ROUTES.home}> here</NavLink>
      </Text>
    </Flex>
  );
}

export default ErrorPage;
