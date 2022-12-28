import { useMemo, useContext } from 'react';
import { AppContext } from '@/context';
import Layout from '@/components/Layout/MainLayout';
import { Flex, Container } from '@mantine/core';
import Headines from '@/components/Headlines';

function OrdersPage() {
  const { mealOrders, fetchedMeals } = useContext(AppContext);

  const orders = useMemo(() => {
    return fetchedMeals.filter((meal) => mealOrders.some((mealRef) => mealRef === meal?.id));
  }, [mealOrders, fetchedMeals]);

  console.log('%c  orders:', 'color: #0e93e0;background: #aaefe5;', orders);
  return (
    <Layout>
      <Flex py={60} bg='secondary.1'>
        <Container size='md'>
          <Headines text='Orders' />
        </Container>
      </Flex>
    </Layout>
  );
}

export default OrdersPage;
