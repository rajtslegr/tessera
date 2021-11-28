import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
    },
  }),
};

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles });
export default theme;
