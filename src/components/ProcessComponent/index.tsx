import { Flex, Timeline, Text, Avatar } from '@mantine/core';
import Order from '@/assets/images/process/order.png';
import Cooking from '@/assets/images/process/cooking.png';
import Delivery from '@/assets/images/process/delivery.png';
import Enjoy from '@/assets/images/process/enjoy.png';
import Headlines from '@/components/Headlines';

function Process() {
  const { Item } = Timeline;

  const stepsConfig = [
    {
      title: 'Place order',
      description: 'Add items from our menu',
      image: Order,
      key: 1,
    },
    {
      title: 'Meal preparation',
      description: 'Our expert chef will prepare your delicious meal',
      image: Cooking,
      key: 2,
    },
    {
      title: 'Order delivery',
      description: 'Your food is underway!',
      image: Delivery,
      key: 3,
    },
    {
      title: 'Enjoy your meal!',
      description: 'Hope you like it :D',
      image: Enjoy,
      key: 4,
    },
  ];

  const renderItems = stepsConfig.map(({ title, description, image, key }) => (
    <Item
      key={key}
      active
      title={
        <Text color='base.7' ff='Oswald' size={20}>
          {title}
        </Text>
      }
      bulletSize={40}
      bullet={<Avatar size={40} radius='xl' src={image} bg='base.1' />}
    >
      {description}
    </Item>
  ));

  return (
    <Flex bg='secondary.2' px={60} py={50} justify='center' direction='column' align='center'>
      <Headlines text='How it works?' upperCased otherProps={{ mb: 30 }} />
      <Timeline lineWidth={6} active={4} color='base.1'>
        {renderItems}
      </Timeline>
    </Flex>
  );
}

export default Process;
