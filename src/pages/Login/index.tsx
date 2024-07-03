import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import DataContext from '../../context/DataContext';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext);

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const testEmail = emailRegex.test(email);
  const isDisabled = password.length > 6 && testEmail;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUser(email);
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/home');
  };

  return (
    <div
      className="
      login__page container
      d-flex justify-content-center
      align-items-center flex-column"
    >
      <h1>IBGE NEWS</h1>
      <form
        className="
        d-flex justify-content-center
        align-items-center flex-column"
        onSubmit={ handleSubmit }
      >
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
          >
            Digite seu email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
          >
            Digite sua senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </div>
        <button
          className="btn btn-primary w-100 text-light"
          disabled={ !isDisabled }
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
