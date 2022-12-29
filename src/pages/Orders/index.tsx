import { useMemo, useContext } from 'react';
import { AppContext } from '@/context';
import Layout from '@/components/Layout/MainLayout';
import { IconTrashX } from '@tabler/icons';
import { Flex, Card, Text, Group, Title, ActionIcon, Image, Progress, Badge } from '@mantine/core';
import Headines from '@/components/Headlines';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';
import Salad from '@/assets/images/salad.png';
import { getMediaQueries } from '@/utils/UI';

function OrdersPage() {
  const { mealOrders, fetchedMeals, handleOrdersLogic } = useContext(AppContext);
  const { sm } = getMediaQueries();

  const ordersData = useMemo(() => {
    return fetchedMeals.filter((meal) => mealOrders.some((mealRef) => mealRef === meal?.id));
  }, [mealOrders, fetchedMeals]);

  const statusSections = [
    { value: 25, label: 'Order placed', color: 'green' },
    { value: 25, label: 'Order in process', color: 'gray' },
    { value: 25, label: 'Order is on the way', color: 'gray' },
    { value: 25, label: 'Order delivered', color: 'gray' },
  ];

  const onClickDelete = (id: string) => () => handleOrdersLogic(id);

  const renderOrders = ordersData.map((order) => (
    <Card w='80%' px={40} withBorder shadow='sm' radius='md' key={order.id}>
      <Card.Section withBorder inheritPadding py='xs'>
        <Group position='apart'>
          <Title color='base.1' size='h3'>
            {order.title}
          </Title>
          <ActionIcon color='red' onClick={onClickDelete(order.id)}>
            <IconTrashX />
          </ActionIcon>
        </Group>
        <Text ff='Oswald' color='gray.7' size={10}>
          ORDER ID: {order.id}
        </Text>
      </Card.Section>
      <Group mt={15} position='apart'>
        <Text ff='Raleway' weight={700}>
          Order status
        </Text>
      </Group>
      {sm ? (
        <Progress animate radius='lg' size='xl' sections={statusSections} />
      ) : (
        <Badge variant='gradient' gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
          Order placed
        </Badge>
      )}
    </Card>
  ));

  return (
    <Layout>
      <Flex
        pt={85}
        pb={20}
        mih={ordersData?.length ? '70vh' : '80vh'}
        bg='secondary.1'
        direction='column'
        align='center'
      >
        <Headines text='Orders' />
        <Flex w='100%' py={25} direction='column' align='center' gap={25}>
          {ordersData?.length ? (
            renderOrders
          ) : (
            <Flex justify='center' align='center' direction='column'>
              <Image src={Salad} />
              <Title size='h2'>No orders placed yet!</Title>
              <Text>
                Go to the <NavLink to={ROUTES.menu}>menu page</NavLink> and add some
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Layout>
  );
}

export default OrdersPage;
