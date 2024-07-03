import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getImageURL from '../../utils/getImageUrl';
import FavoriteHeart from '../FavoriteHeart';
import getDateTime from '../../utils/getDateTime';

export default function LatestNews() {
  const { latestNews } = useContext(DataContext);

  if (!latestNews) {
    return <div>Loading...</div>;
  }

  const newsURL = latestNews.link;

  const image = JSON.parse(latestNews.imagens);
  const imageURL = getImageURL(image.image_intro);

  const newsId = latestNews.id.toString();

  return (
    <div className="latest_news_box">
      <div>
        <span className="text-danger d-block mb-2">Notícia mais recente</span>
      </div>
      <a href={ newsURL }>
        <img
          src={ imageURL }
          alt={ latestNews.titulo }
          className="w-100 mb-2"
        />
        <p className="most_recent_news_title">{latestNews.titulo}</p>
        <p className="most_recent_news_intro">{latestNews.introducao}</p>
      </a>
      <div className="d-flex justify-content-between align-items-center">
        <span className="news_date">
          {`${latestNews.tipo} | ${getDateTime(latestNews.data_publicacao)}`}
        </span>
        <FavoriteHeart newsId={ newsId } />
      </div>
    </div>
  );
}
