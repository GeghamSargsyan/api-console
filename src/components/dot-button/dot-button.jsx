import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import onKeyUpCallback from '../../utils/on-key-up-callback';

import styles from './dotbutton.module.scss';

const cx = classnames.bind(styles);

export default function DotButton({ className, open, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleCliack = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, [isActive]);

  return (
    <>
      <div
        className={cx('container', className)}
        role="tab"
        tabIndex="0"
        onKeyUp={onKeyUpCallback(handleCliack)}
        onClick={handleCliack}
      >
        <div className={cx('dot', { active: open })}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={cx('dot_popup')}>
        { children }
      </div>
    </>
  );
}
DotButton.defaultProps = {
  className: '',
};

DotButton.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
