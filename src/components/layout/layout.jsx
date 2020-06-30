import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import RequestBar from '../request-bar';

import styeles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styeles.layout}>
    <section>
      <Header />
      <RequestBar />
    </section>
    { children }
    <footer>footer</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
