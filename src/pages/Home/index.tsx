import { useContext, useEffect, useState } from 'react';
import LatestNews from '../../components/LatestNews';
import DataContext from '../../context/DataContext';
import NewsBox from '../../components/NewsBox';
import fetchNews from '../../utils/fetchAPI';
import Loading from '../../components/Loading';
import Separator from '../../components/Separator';
import ScrollToTop from '../../components/ScrollToTop';

export default function Home() {
  const [page, setPage] = useState(2);
  const [isLoadingMorePages, setIsLoadingMorePages] = useState(false);

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

  const handleLoadMorePages = () => {
    const pageNumber = page.toString();

    setIsLoadingMorePages(true);

    fetchNews(pageNumber).then((result) => {
      setNews([...news, ...result.items]);
      setPage(page + 1);
      setIsLoadingMorePages(false);
    });
  };

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
        {isLoadingMorePages
          ? <Loading />
          : (
            <button
              className="btn btn-secondary"
              onClick={ handleLoadMorePages }
            >
              Carregar mais
            </button>
          )}
      </div>
      <ScrollToTop />
    </main>
  );
}
