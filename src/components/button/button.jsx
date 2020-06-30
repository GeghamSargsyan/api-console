import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  handleClick,
  className,
  isLoading,
  type,
  children,
}) => (
  <button
    className={cx('button', className, { loading: isLoading })}
    onClick={handleClick}
    // eslint-disable-next-line react/button-has-type
    type={type}
  >
    { children }
  </button>
);

Button.defaultProps = {
  className: '',
  isLoading: false,
  type: 'button',
};

Button.propTypes = {
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(['submit, button']),
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default memo(Button);
