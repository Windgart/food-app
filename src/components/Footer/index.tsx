import { Flex, Text } from '@mantine/core';

function Footer() {
  return (
    <Flex justify='center' bg='base.1' py={30} direction='column' align='center'>
      <Text size={12} color='contrast.1'>
        Food App {new Date().getFullYear()}
      </Text>
      <Text size={13} color='contrast.1'>
        Develop by Alex Moreno <br /> windgart@protonmail.com
      </Text>
    </Flex>
  );
}

export default Footer;
