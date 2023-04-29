import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const SignUp = ({addCredentials}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    if (!name) {
      setError('Введите логин');
      return;
    }

    if (!email.match("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
      setError('Введите коррекнтный емейл адрес');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    addCredentials(name, password)
    return setRegistrationStatus(true)
  };

  useEffect(() => {
    if (registrationStatus) {
      navigate('/signin');
    }
  }, [registrationStatus])

  return <React.Fragment>
    <h2>Регистрация</h2>
    <form onSubmit={handleRegister}>
      <div>Логин</div>
      <input
        type="text"
        placeholder="Логин"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Почта</div>
      <input
        type="text"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>Пароль</div>
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>Повторите пароль</div>
      <input
        type="password"
        placeholder="Повторите пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <br/>
      <button type="submit">Зарегистрироваться</button>
      {registrationStatus &&
      <div className="success">"Регистрация успешна!"</div>
      }
      {error &&
      <div className="error">{error}</div>}
    </form>
  </React.Fragment>
}