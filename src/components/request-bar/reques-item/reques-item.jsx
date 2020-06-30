import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import DotButton from '../../dot-button';

import styles from './request-item.module.scss';

const cx = classNames.bind(styles);

const RequestItem = ({id, name, isFail, open, onClick}) => (
  <div className={cx('request-item')} onClick={onClick}>
    <section className={cx('request-item_status', {fail: isFail})} />
    <section className={cx('request-item_name')}>{ name }</section>
    <DotButton open={open} className={cx('request-item_button')}>
      <div className={cx('request-item_button_popup', { open })}>
        <section className={cx('request-item_button_popup__item')}>Выполнить</section>
        <section className={cx('request-item_button_popup__item')}>Скопировать</section>
        <section className={cx('request-item_button_popup__item')}>Удалить</section>
      </div>
    </DotButton>
  </div>
);

RequestItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFail: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default memo(RequestItem);