import { Flex, Box, Image, Text } from '@mantine/core';
import ComboIcon from '@/assets/images/fast-food.png';
import ReservationIcon from '@/assets/images/phone-food.png';
import AboutUs from '@/assets/images/courier.png';

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
      <Box
        sx={(theme) => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          width: 150,
          height: 150,
          backgroundColor: theme.colors.base[1],
          borderRadius: '50%',
        })}
      >
        <Image height={90} width='auto' src={img} />
      </Box>
      <Text color='base.3'>{text}</Text>
    </Box>
  ));

  return (
    <Flex bg='soft.1' py={80} direction='row' wrap='wrap' gap={60} justify='center'>
      {renderItems}
    </Flex>
  );
}

export default Spotlights;
