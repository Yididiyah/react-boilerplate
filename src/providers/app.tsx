import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router } from 'react-router-dom';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <NextUIProvider>
      <Router>{children}</Router>
    </NextUIProvider>
  );
};
