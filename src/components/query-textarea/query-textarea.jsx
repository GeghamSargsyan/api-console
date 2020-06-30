import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './query-textarea.module.scss';

const cx = classnames.bind(styles);

const QueryTextarea = ({ value, className, onChange }) => (
  <div className={cx('query-textarea', className)}>
    <textarea
      name="query"
      className={cx('query-textarea_textarea')}
      onChange={onChange}
    >
      { value }
    </textarea>
  </div>
);

QueryTextarea.defaultProps = {
  className: '',
  onChange: () => {},
};

QueryTextarea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default memo(QueryTextarea);
