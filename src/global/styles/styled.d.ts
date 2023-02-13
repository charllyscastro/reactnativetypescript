import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

// Sobrescreve o thema de styled-components, para poder usar o arquivo theme.ts
