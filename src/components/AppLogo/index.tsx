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
      <Text color={fontColor} ff='Oswald, san-serif' fw={700} lts={2} size={18} lh={1}>
        {appName || 'text'}
      </Text>
      <Text color={fontColor} ff='Oswald, san-serif' fw={500} lts={2} size={10} lh={1}>
        {subtext?.toLocaleUpperCase() || ''}
      </Text>
    </Flex>
  );
}

export default AppLogo;
