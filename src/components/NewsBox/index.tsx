/* eslint-disable react/jsx-max-depth */
import { ItemsType } from '../../types';
import './styles.css';
import FavoriteHeart from '../FavoriteHeart';
import getImageURL from '../../utils/getImageUrl';
import getDateTime from '../../utils/getDateTime';
import ShareButton from '../ShareButton';

export default function NewsBox({ news }: { news: ItemsType }) {
  const newsURL = news.link;

  const image = JSON.parse(news.imagens);
  const imageURL = getImageURL(image.image_intro);

  return (
    <div className="card mb-3 news_card" data-testid="news-card">
      <div className="row g-0">
        <div className="d-flex flex-column justify-content-center col-4">
          <div>
            <a href={ newsURL }>
              <img src={ imageURL } className="img-fluid" alt="..." />
            </a>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <FavoriteHeart news={ news } />
            <ShareButton newsURL={ newsURL } />
          </div>
        </div>
        <div className="col-8">
          <div className="card-body">
            <a href={ newsURL }>
              <p className="card-title news_title">{news.titulo}</p>
            </a>
            <p className="card-text">
              <small className="text-body-secondary">
                {`${news.tipo} | ${getDateTime(news.data_publicacao)}`}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
