import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      {/* Layout is a component from ant design, not a
      self closing component, it basically lays everything down */}
      <Layout>
        <div className="routes">
        {/* Switch component is from react-router-dom,
        it allows us to have multiple routes  */}
          <Switch>
          {/* below route will render the homepage component */}
            <Route exact path="/">
              <Homepage />
            </Route>
          {/* below route will render exchanges component */}
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            {/* colon means that coinId will be dynamic */}
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={4} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
            Cryptoworld Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          {/* <Link to="/exchanges">Exchanges</Link> */}
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;