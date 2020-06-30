import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Buttton from '../button';
import Logo from '../logo';

import styles from './login.module.scss';

const cx = classNames.bind(styles);

const LogIn = ({ handleLogIn, className }) => {
  const [options, setOptions] = useState({ login: '', sblogin: '', password: '' });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    handleLogIn();
  }, [options]);

  const handleChange = useCallback((event) => {
    if (!event || !event.target) return;
    const { value, name } = event.target;
    setOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  },
  [options]);

  const isValid = useCallback(
    () => Object.values(options).every((option) => option),
    [options],
  );

  return (
    <div className={cx('container', className)}>
      <Logo />
      <div className={cx('login')}>
        <h1 className={cx('login_title')}>API-консолька</h1>
        <form className={cx('login_form')} onSubmit={handleSubmit}>
          <label
            htmlFor="login"
            className={cx('login_form__label')}
          >
            Логин
          </label>
          <input
            type="text"
            placeholder="Логин"
            name="login"
            id="login"
            value={options.login}
            className={cx('login_form__input')}
            onChange={handleChange}
          />
          <label
            htmlFor="sblogin"
            className={cx('login_form__label')}
          >
            Сублогин
          </label>
          <input
            type="text"
            placeholder="Сублогин"
            name="sblogin"
            id="sblogin"
            value={options.sblogin}
            className={cx('login_form__input')}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className={cx('login_form__label')}
          >
            Пароль
          </label>
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            id="password"
            value={options.password}
            className={cx('login_form__input')}
            onChange={handleChange}
          />
          <Buttton className={cx('login_form_button', { diablet: isValid() })} handleClick={() => {}}>Войти</Buttton>
        </form>
      </div>
    </div>
  );
};

LogIn.defaultProps = {
  className: '',
};

LogIn.propTypes = {
  className: PropTypes.string,
  handleLogIn: PropTypes.func.isRequired,
};

export default LogIn;
