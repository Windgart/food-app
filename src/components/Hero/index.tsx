import { Flex, Container, Grid, Text, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Food from '@/assets/images/diet.png';
import { ROUTES } from '@/utils/constants';
import Headlines from '@/components/Headlines';

function Hero() {
  const navigate = useNavigate();

  return (
    <Flex bg='secondary.2' align='center' direction='column' justify='center'>
      <Container size='sm' py={60}>
        <Grid justify='center' align='center' gutter={30}>
          <Grid.Col order={2} orderMd={1} sm={12} md={5}>
            <Headlines
              text='Looking for delicious meals?'
              upperCased
              otherProps={{ ff: 'Oswald' }}
            />
            <Text my={10} ff='Raleway' color='base.3' size={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat natus rem
              ut amet sint, earum ipsum reiciendis vitae labore. Dolor ipsum dicta aperiam rerum?
              Recusandae neque sed natus vel.
            </Text>

            <Button onClick={() => navigate(ROUTES.menu)} mt={10}>
              Start browsing meals!
            </Button>
          </Grid.Col>
          <Grid.Col order={1} orderMd={2} sm={12} md={4}>
            <Image sx={{ pointerEvents: 'none' }} height={300} width='auto' src={Food} />
          </Grid.Col>
        </Grid>
      </Container>
    </Flex>
  );
}

export default Hero;
