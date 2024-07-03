import { useContext, useEffect } from 'react';
import LatestNews from '../../components/LatestNews';
import DataContext from '../../context/DataContext';
import NewsBox from '../../components/NewsBox';
import fetchNews from '../../utils/fetchAPI';
import Loading from '../../components/Loading';
import Separator from '../../components/Separator';

export default function Home() {
  const {
    news,
    setNews,
    setLatestNews,
    isLoading,
    setIsLoading } = useContext(DataContext);

  useEffect(() => {
    setIsLoading(true);
    fetchNews().then((result) => {
      const latestNews = result.items[0];
      const filteredNews = result.items.slice(1);
      setNews(filteredNews);
      setLatestNews(latestNews);
      setIsLoading(false);
    });
  }, [setNews, setLatestNews, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <LatestNews />
      <Separator />
      <div className="mt-5 mb-5">
        {news.map((pieceOfNews) => (
          <NewsBox
            key={ pieceOfNews.id }
            news={ pieceOfNews }
          />
        ))}
      </div>
      <div
        className="d-flex justify-content-center align-items-center mb-5"
      >
        <button className="btn btn-secondary">Carregar mais</button>
      </div>
    </main>
  );
}
