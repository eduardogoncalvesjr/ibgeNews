import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import getImageURL from '../../utils/getImageUrl';

export default function LatestNews() {
  const { latestNews } = useContext(DataContext);

  if (!latestNews) {
    return <div>Loading...</div>;
  }

  const newsURL = latestNews.link;

  const image = JSON.parse(latestNews.imagens);
  const imageURL = getImageURL(image.image_intro);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <span className="text-danger">Notícia mais recente</span>
        <button>favoritar</button>
      </div>
      <div>
        <a href={ newsURL }>
          <img
            src={ imageURL }
            alt={ latestNews.titulo }
            className="w-100"
          />
        </a>
      </div>
      <p className="most_recent_news_title">{latestNews.titulo}</p>
      <p>{latestNews.introducao}</p>
      <div className="d-flex justify-content-between">
        tempo
        <button className="btn btn-success">
          <a href={ newsURL }>Leia a notícia</a>
        </button>
      </div>
    </div>
  );
}
