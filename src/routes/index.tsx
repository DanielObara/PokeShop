import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  /* Switch trabalha com a exclusividade da rota.
  Caso não tivesse seria mostrado os dois componentes.
  Garante que apenas uma rota seja exibida.
  */
  <Switch>
    {/* Passamos o exact quando queremos que seja chamado determinada rota
    apenas quando for exatamente igual ao que foi passado ao path  */}
    <Route path="/" exact component={Pokedex} />
    <Route path="/details" component={Details} />
  </Switch>
);

export default Routes;
