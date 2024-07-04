import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="bg-secondary text-light p-3">
        <h2>IBGE News</h2>
        <button
          className="footer_link"
          onClick={ (e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          } }
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
      </footer>
    </div>
  );
}
