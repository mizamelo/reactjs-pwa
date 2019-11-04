import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/components/InputComponent';
import './styles.scss';

// import { Container } from './styles';

export default function Login() {
  return (
    <div className="container">
      <div className="login-position">
        <form>
          <Input type={"text"} name={"email"} title={"E-mail"}/>
          <Input type={"password"} name={"password"} title={"Password"}/>
          <button className="btn-default" type="submit">Entrar</button>
        </form>
        <div className="complementar-text-container">
          <p>Ainda não é cadastrado?{' '}
            <Link to="/register" className="default-link">Resgistrar-se</Link>
          </p> 
        </div>
      </div>
    </div>
  );
}
