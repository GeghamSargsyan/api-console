import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';

const cx = classNames.bind(styles);

const Footer = ({ chilldren, className }) => (
  <footer className={cx('footer', className)}>
    <section>{ chilldren }</section>
    <section>gitHUB </section>
    <section>chilldren </section>
  </footer>
);

Footer.defaultProps = {
  className: '',
  chilldren: <span />,
};

Footer.propTypes = {
  className: PropTypes.string,
  chilldren: PropTypes.node,
};

export default memo(Footer);
