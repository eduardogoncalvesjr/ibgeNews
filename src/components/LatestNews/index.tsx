/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getImageURL from '../../utils/getImageUrl';
import FavoriteHeart from '../FavoriteHeart';
import getDateTime from '../../utils/getDateTime';
import ShareButton from '../ShareButton';

export default function LatestNews() {
  const { latestNews } = useContext(DataContext);

  if (!latestNews) {
    return <div>Loading...</div>;
  }

  const newsURL = latestNews.link;

  const image = JSON.parse(latestNews.imagens);
  const imageURL = getImageURL(image.image_intro);

  return (
    <div className="latest_news_box card mb-3 mb-lg-5">
      <div className="row g-0">
        <div className="col-lg-6 p-0">
          <a href={ newsURL }>
            <img
              src={ imageURL }
              alt={ latestNews.titulo }
              className="img-fluid latest_news_image"
            />
          </a>
        </div>
        <div className="col-lg-6 p-0 pt-sm-3 pt-md-0 ps-lg-3">
          <div className="card-body p-0">
            <div>
              <a href={ newsURL }>
                <p className="most_recent_news_title">
                  {latestNews.titulo}
                </p>
                <p className="most_recent_news_intro">
                  {latestNews.introducao}
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="news_date">
                {`${latestNews.tipo} | ${getDateTime(latestNews.data_publicacao)}`}
              </span>
              <div className="d-flex justify-content-start align-items-center">
                <FavoriteHeart news={ latestNews } />
                <ShareButton newsURL={ newsURL } />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
