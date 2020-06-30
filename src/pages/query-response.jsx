import React, {
  memo, useState, useCallback, useRef,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import Layout from '../components/layout';
import QueryTextarea from '../components/query-textarea';

import styles from './query-reponse.module.scss';

const cx = classnames.bind(styles);

const QueryResponse = ({ className }) => {
  const [size, setSize] = useState({
    query: 100,
    response: 100,
  });

  const resizeParentRef = useRef(null);

  const handleResize = useCallback((event) => {
    if (!resizeParentRef?.current || !event?.target) return;
    const currentSize = (event.pageX * 100) / resizeParentRef.current.offsetWidth;

    setSize({
      query: currentSize,
      response: 100 - currentSize,
    });
  }, [size]);

  const endResize = useCallback(() => {
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', endResize);
  }, [handleResize]);

  const startResize = useCallback(() => {
    if (!document) return;
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', endResize);
  }, [handleResize, endResize]);

  return (
    <Layout>
      <div className={cx('query-response')} ref={resizeParentRef}>
        <section style={{ width: `${size.query}%` }} className={cx('query-response_query', className)}>
          <QueryTextarea value="" />
        </section>
        <section className={cx('query-response_resiz')} role="none" onMouseDown={startResize}>
          <div />
          <div />
          <div />
        </section>
        <section style={{ width: `${size.response}%` }} className={cx('query-response_response')}>
          <QueryTextarea value="" />
        </section>
      </div>
    </Layout>
  );
};

QueryResponse.defaultProps = {
  className: '',
};

QueryResponse.propTypes = {
  className: PropTypes.string,
};

export default memo(QueryResponse);
