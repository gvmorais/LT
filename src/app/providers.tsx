// app/providers.tsx
'use client';

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';

const customConfig = {
  ...defaultConfig,
  theme: {
    breakpoints: {
      base: '0em',
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
  },
};

const system = createSystem(customConfig);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>{children}</ChakraProvider>
  );
}
