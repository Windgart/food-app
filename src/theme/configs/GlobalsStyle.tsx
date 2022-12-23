import { Global } from '@mantine/core';

function GlobalStyle() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: 'url("/fonts/OswaldBold.woff2") format("woff2")',
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: 'url("/fonts/OswaldMedium.woff2") format("woff2")',
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Oswald',
            src: 'url("/fonts/OswaldExtraLight.woff2") format("woff2")',
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: 'url("/fonts/RalewayLight.woff2") format("woff2")',
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: 'url("/fonts/RalewayMedium.woff2") format("woff2")',
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Raleway',
            src: 'url("/fonts/RalewayBold.woff2") format("woff2")',
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default GlobalStyle;
