import { Flex, Container, Grid, Title, Text, Image, Button } from '@mantine/core';
import Food from '@/assets/images/diet.png';

function Hero() {
  return (
    <Flex bg='secondary.2' direction='column' justify='center'>
      <Container size='md' py={60}>
        <Grid justify='center' align='center' gutter={30}>
          <Grid.Col order={2} orderMd={1} sm={12} md={5}>
            <Title
              sx={{ fontFamily: 'Oswald', fontWeight: 700 }}
              color='base.5'
              order={1}
              size={70}
            >
              HOPE YOU LIKE <br /> YUMI FOOD
            </Title>
            <Text my={10} sx={{ fontFamily: 'Raleway' }} color='base.3' size={14}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat natus rem
              ut amet sint, earum ipsum reiciendis vitae labore. Dolor ipsum dicta aperiam rerum?
              Recusandae neque sed natus vel.
            </Text>

            <Button mt={10}>Click me</Button>
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
