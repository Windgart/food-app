import { Text, Flex, Image } from '@mantine/core';
import LogoPicture from '@/assets/images/burger.png';

interface AppLogoProps {
  appName?: string;
  subtext?: string;
}

function AppLogo({ appName, subtext }: AppLogoProps) {
  const fontColor = 'contrast.1';
  return (
    <Flex direction='column' gap={2} justify='center' align='center'>
      <Image width={40} src={LogoPicture} alt={appName} />
      <Text
        color={fontColor}
        sx={{
          fontFamily: 'Oswald, san-serif',
          fontWeight: 700,
          letterSpacing: 2,
          fontSize: 18,
          lineHeight: 1,
        }}
      >
        {appName || 'text'}
      </Text>
      <Text
        color={fontColor}
        sx={{
          fontFamily: 'Oswald, san-serif',
          fontWeight: 500,
          letterSpacing: 2,
          fontSize: 10,
          lineHeight: 1,
        }}
      >
        {subtext?.toLocaleUpperCase() || ''}
      </Text>
    </Flex>
  );
}

export default AppLogo;
