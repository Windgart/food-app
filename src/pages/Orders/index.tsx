import Layout from '@/components/Layout/MainLayout';
import { Flex } from '@mantine/core';

function OrdersPage() {
  return (
    <Layout>
      <Flex py={60} bg='secondary.1'>
        Orders
      </Flex>
    </Layout>
  );
}

export default OrdersPage;
