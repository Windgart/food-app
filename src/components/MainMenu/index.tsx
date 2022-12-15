import { Flex, Text, MediaQuery, UnstyledButton, Image } from '@mantine/core';
import { options } from './menuConfigs';

function MainMenu() {
  const renderOptions = options.map(({ id, name, image }) => (
    <UnstyledButton key={id}>
      <Flex direction='row'>
        <Image height={15} width='auto' src={image} />
        <Text ml={5} sx={{ fontFamily: 'Raleway', fontWeight: 300, fontSize: 12 }} color='gray.0'>
          {name}
        </Text>
      </Flex>
    </UnstyledButton>
  ));

  return (
    <Flex mt={10} direction='row' justify='center' align='center'>
      <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
        <Flex justify='center' gap={30} sx={{ backgroundColor: 'transparent' }}>
          {renderOptions}
        </Flex>
      </MediaQuery>
    </Flex>
  );
}

export default MainMenu;
