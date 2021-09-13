import React from 'react';
import GlobalStyle from './theme/globalStyle';
import GlobalContext from './context/index'
import Router from './router';
function App() {
  return (
    <GlobalContext>
      <Router />
      <GlobalStyle />
    </GlobalContext>
  );
}

export default App;
