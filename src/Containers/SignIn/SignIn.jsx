import React, {useState} from 'react';

export const SignIn = ({credentials}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === credentials.name && loginPassword === credentials.password && credentials.name !== "" && credentials.name !== "" ) {
      setIsLoggedIn(true);
      setLoginEmail('');
      setLoginPassword('');
      return
    }
    setError("Неверный логин или пароль")
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Вы вошли в систему!</h1>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    );
  }

  return <React.Fragment>
    <h2>Аутентификация</h2>
    <form onSubmit={handleLogin}>
      <div>Логин</div>
      <input
        type="text"
        placeholder="Логин"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <div>Пароль</div>
      <input
        type="password"
        placeholder="Пароль"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <br/>
      <button type="submit">Войти</button>
      {error &&
      <div className="error">{error}</div>}
    </form>
  </React.Fragment>
}