import { useContext } from 'react';
import LatestNews from '../../components/LatestNews';
import DataContext from '../../context/DataContext';
import NewsBox from '../../components/NewsBox';

export default function Home() {
  const { news } = useContext(DataContext);
  const filteredNews = news.slice(1);

  return (
    <>
      <LatestNews />
      <div className="mt-5 mb-5">
        {filteredNews.map((pieceOfNews) => (
          <NewsBox
            key={ pieceOfNews.id }
            news={ pieceOfNews }
          />
        ))}
      </div>
    </>
  );
}
