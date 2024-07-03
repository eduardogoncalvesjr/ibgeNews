export default function Footer() {
  return (
    <footer className="bg-secondary text-light p-3">
      <h2>IBGE News</h2>
      <a href="/#" className="footer_link">
        Início
      </a>
      <a href="/#" className="footer_link">
        Painel
      </a>
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
  );
}
