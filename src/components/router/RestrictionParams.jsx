// UseParams.jsx
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Link,
  useParams,
} from "react-router-dom";

import { Card } from '@material-ui/core';
import styled from 'styled-components';

const StyledMui = styled(Card)`
    display: flex;
    justify-content: space-around;
    background-color: purple;
    color: lightgreen;
    text-transform: uppercase;
    font-size: 0.75em
`;

// root
export default function Params() {
  const [stockOption, setStockOption] = useState('20');
  const [stockValue, setStockValue] = useState('SOS');

  let restrictions = `/restrictions/${stockOption}/${stockValue}`;  // [IMA-3222]
  let restriction = `/restriction/${stockOption}/${stockValue}`;    // [IMA-3024] 

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={restrictions}>Shipping Restrictions</Link>
            </li>
            <li>
              <Link to={restriction}>Shipping Restriction Configurator</Link>
            </li>
              </ul>
        </nav>
        <Switch>
          <Route path="/restrictions/:stockOption/:stockValue">
            <ShippingRestrictions />
          </Route>
          <Route path="/restriction/:stockOption/:stockValue">
            <ShippingRestrictionConfigurator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

// parent
function ShippingRestrictions() {
  let params = useParams();

  const [stockOption, setStockOption] = useState('20');
  let [stockValue, setStockValue] = useState('SOS');

  let restriction = `/restriction/${stockOption}/${stockValue}`;    // [IMA-3024] 
  <Route path="/restriction/:stockOption/:stockValue">
    <ShippingRestrictionConfigurator />
  </Route>

  const handleOnClick = (e) => {
    setStockValue(e.target.value);
    params.stockValue = e.target.value;
  }
  
  return (
    <div>
        <h3>Shipping Restrictions Routes</h3>
      <br />
        Current <b>stock value</b> parameter is <strong>{params.stockValue}</strong>
      <hr />
      <h3>Shipping Restrictions Resources</h3>
      <span>Current selected stock value: <b>{stockValue}</b></span>
      <div>
        <button name="stk" value="STK"  onClick={(e) => handleOnClick(e)}>STK</button>
        <button name="sos" value="SOS"  onClick={(e) => handleOnClick(e)}>SOS</button>
        <button name="hzm" value="HZM"  onClick={(e) => handleOnClick(e)}>HZM</button>
      </div> 
      <Link to={restriction}>Shipping Restriction Configurator</Link>
      <Route path="/restriction/:stockOption/:stockValue">
            <ShippingRestrictionConfigurator />
      </Route>
    </div>
  );
}

// child
function ShippingRestrictionConfigurator() {
  let params = useParams();
  
  const [stockOption, setStockOption] = useState('');
  let [stockValue, setStockValue] = useState('');
  let restrictions = `/restrictions/${stockOption}/${stockValue}`;  // [IMA-3222]
  return (
    <div>
      <h3>Shipping Restriction Configurator Routes</h3>
      <div>
        {/* Current <b>stock option</b> parameter is <strong>{params.stockOption}</strong> */}
      </div>
      <div>
        Current <b>stock value</b> parameter is <strong>{params.stockValue}</strong>
      </div>
      <hr />
      <StyledMui>
      <h3>Shipping Restriction Configurator Resources</h3>
      <input type='text' value={params.stockOption} readOnly />
      <input type='text' value={params.stockValue} readOnly />
      </StyledMui>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      <h2>React Router useParams hook</h2>
      <h3>Click on the links to see it in action</h3>
    </div>
  );
}

// eof