import { Global } from '@mantine/core';
import OswaldBold from '@/assets/fonts/Oswald-Bold.woff2';
import OswaldMedium from '@/assets/fonts/Oswald-Medium.woff2';
import OswaldLight from '@/assets/fonts/Oswald-Light.woff2';
import RalewayBold from '@/assets/fonts/Raleway-Bold.woff2';
import RalewayMedium from '@/assets/fonts/Raleway-Medium.woff2';
import RalewayLigth from '@/assets/fonts/Raleway-Light.woff2';

function GlobalStyle() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: `url('${OswaldBold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: `url('${OswaldMedium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: `url('${OswaldLight}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: `url('${RalewayLigth}') format("woff2")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: `url('${RalewayMedium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: `url('${RalewayBold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default GlobalStyle;
