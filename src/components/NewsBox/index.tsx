import { ItemsType } from '../../types';
import './styles.css';
import FavoriteHeart from '../FavoriteHeart';
import getImageURL from '../../utils/getImageUrl';
import getDateTime from '../../utils/getDateTime';

export default function NewsBox({ news }: { news: ItemsType }) {
  const newsId = news.id.toString();

  const image = JSON.parse(news.imagens);
  const imageURL = getImageURL(image.image_intro);

  return (
    <div className="mt-5 mb-5">
      <a href="link">
        <div className="d-flex flex-row justify-content-center align-items-center gap-3">
          <div className="image">
            <img src={ imageURL } alt="" />
          </div>
          <div className="news_info">
            <p className="news_title">{news.titulo}</p>
          </div>
        </div>
      </a>
      <div className="d-flex justify-content-between align-items-center">
        <span className="news_date">
          {`${news.tipo} | ${getDateTime(news.data_publicacao)}`}
        </span>
        <FavoriteHeart newsId={ newsId } />
      </div>
    </div>
  );
}
