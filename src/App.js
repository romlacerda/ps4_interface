import React from 'react';
import Home from './pages/Home';
import { App as AppStyle } from './components/App/styles';
import GlobalStyle from './themes/globalStyle';

function App() {
  return (
    <AppStyle>
      <GlobalStyle />
      <Home />
    </AppStyle>
  );
}

export default App;
