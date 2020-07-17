import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

// import { CartProvider } from './context/Cart';

const App: React.FC = () => (
  <>
    {/* <CartProvider> */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* </CartProvider> */}
    <GlobalStyle />
  </>
);

export default App;
