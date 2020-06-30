import React from 'react';
import classNames from 'classnames/bind';

import Logo from '../logo';

import { ReactComponent as FullScreenSVG } from '../../assets/icons/full-screen.svg';
import { ReactComponent as LogOutSVG } from '../../assets/icons/log-out.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = () => (
  <header className={cx('header')}>
    <section className={cx('header_logo')}>
      <Logo />
      <h1 className={cx('header_logo_text')}>API-консолька</h1>
    </section>
    <section className={cx('header_right-section')}>
      <section className={cx('header_right-section_sublogin')}>example@asz.com : sublogin</section>
      <section className={cx('header_right-section_logout')}>
        <span className={cx('header_right-section_logout_text')}>Выйти</span>
        <LogOutSVG />
      </section>
      <section className={cx('header_right-section_full-scrin')}>
        <FullScreenSVG />
      </section>
    </section>
  </header>
);

export default Header;
