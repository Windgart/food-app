import { Flex, Box, Image, Text } from '@mantine/core';
import ComboIcon from '@/assets/images/fast-food.png';
import ReservationIcon from '@/assets/images/phone-food.png';
import AboutUs from '@/assets/images/courier.png';
import Headlines from '@/components/Headlines';

function Spotlights() {
  const badgesConfig = [
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: ComboIcon,
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      img: ReservationIcon,
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet consectetur',
      img: AboutUs,
    },
  ];

  const renderItems = badgesConfig.map(({ id, img, text }) => (
    <Box w={150} h='auto' key={id}>
      <Flex
        align='center'
        justify='center'
        w={150}
        h={150}
        bg='base.1'
        sx={{
          borderRadius: '50%',
        }}
      >
        <Image height={90} width='auto' src={img} />
      </Flex>
      <Text color='base.3'>{text}</Text>
    </Box>
  ));

  return (
    <Flex
      bg='secondary.2'
      py={30}
      direction='column'
      wrap='wrap'
      gap={60}
      justify='center'
      align='center'
    >
      <Headlines upperCased text='Our services' />
      <Flex pb={60} wrap='wrap' gap={60} justify='center' direction='row'>
        {renderItems}
      </Flex>
    </Flex>
  );
}

export default Spotlights;
