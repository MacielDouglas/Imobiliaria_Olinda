import farol from '../assets/lighthouse-icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-400">
      <div className="flex flex-wrap gap-4 justify-center items-center max-w-7xl mx-auto p-20 md:justify-between">
        <Link to="/" className="">
          <img src={farol} className="w-28" alt="Farol de Olinda" />
        </Link>
        <p className="text-center">
          Site fictício desenvolvido por Maciel D. <br />
          Olinda Imoveis © Alguns direitos reservados.
        </p>
        <p className="text-center">
          Acesse outros projetos:
          <br />
          <a href="https://olibike.web.app/">#OliBike</a> |{' '}
          <a href="https://cafe-bourbon.web.app/">Café Bourbon</a> |{' '}
          <a href="https://dogsapp-c4d5b.web.app/">Dog´s App</a>
        </p>
      </div>
    </footer>
  );
}
