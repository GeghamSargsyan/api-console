import React, { memo, useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import RequestItem from './reques-item';

import { ReactComponent as CloseSVG } from '../../assets/icons/close.svg';

import styles from './request-bar.module.scss';

const cx = classNames.bind(styles);

const state = [
  {id: 'sdrresdsa', name: 'task.get'},
  {id: 'sdsdertsa', name: 'gh.get'},
  {id: 'sds545dqwwsa', name: 'task.post'},
  {id: 'sdsdkjhkjsddsa', name: 'dhgsdh.get'},
  {id: 'sdsrsfsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsdbkjdsa', name: 'dhgsdh.get'},
  {id: 's454dsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdskjhkjdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
  {id: 'sdsdsddsa', name: 'dhgsdh.get'},
];

const RequestsBar = ({requests=state}) => {

  const [ active, setActive] = useState('');
  
  const handleOpen = useCallback(
    (id) => () => {
      setActive(prevStae => prevStae === id ? '' : id);
    },
  [active]);

  return (
    <div className={cx('request-bar')}>
      <div className={cx('request-bar_container')}>
        {requests.map(request => (
          <RequestItem
            key={request.id}
            id={request.id}
            name={request.name}
            isFail={false}
            open={active === request.id}
            onClick={handleOpen(request.id)}
          />
        ))}
      </div>
      <section className={cx('request-bar_close')}>
        <CloseSVG />
      </section>
    </div>
  )
}

export default memo(RequestsBar);