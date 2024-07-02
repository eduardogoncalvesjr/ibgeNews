import { ItemsType } from '../../types';
import './styles.css';

export default function NewsBox({ news }: { news: ItemsType }) {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="fs-5 fw-bold">{news.titulo}</p>
        <button>favorito</button>
      </div>
      <p className="news_introduction_size fs-6">{news.introducao}</p>
      <div className="d-flex justify-content-between">
        tempo
        <button className="btn btn-success">Leia a notícia</button>
      </div>
    </div>
  );
}
