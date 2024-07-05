import { Link } from 'react-router-dom';

export default function Footer() {
  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (window.location.pathname === '/home') {
      window.scrollTo(0, 0);
    } else {
      window.location.href = '/home';
    }
  }

  return (
    <footer className="bg-secondary text-light p-3">
      <div className="container-md">
        <h2>IBGE News</h2>
        <button
          className="footer_link"
          onClick={ handleButtonClick }
        >
          Início
        </button>
        <Link to="/favorites">Favorites</Link>
        <br />
        <Link to="/user-panel">Painel</Link>
        <p className="text-center mt-5">
          Copyright © 2024 -
          <a
            className="footer_link_name"
            href="https://www.linkedin.com/in/devedugjnr/"
          >
            {' '}
            Eduardo Gonçalves Junior
          </a>
        </p>
      </div>
    </footer>
  );
}
