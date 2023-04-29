import {Link} from "react-router-dom";

export const Layout = ({children}) => {
  return <div className='layout'>
    <div className="wrapperButton">
      <Link to='/'>Регистрация</Link>
      <Link to='/signin'>Авторизация</Link>
    </div>
    <div className="wrapperPage">
      {children}
    </div>
  </div>
}