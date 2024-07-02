import { useState } from 'react';
import { ItemsType } from '../../types';
import './styles.css';
import FavoriteHeart from '../FavoriteHeart';

export default function NewsBox({ news }: { news: ItemsType }) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="news_title">{news.titulo}</p>
        <FavoriteHeart isFavorite={ isFavorite } />
      </div>
      <p className="news_introduction_size fs-6">{news.introducao}</p>
      <div className="d-flex justify-content-between">
        tempo
        <button className="btn btn-success">Leia a notícia</button>
      </div>
    </div>
  );
}
