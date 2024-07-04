import { useContext, useEffect, useState } from 'react';
import LatestNews from '../../components/LatestNews';
import DataContext from '../../context/DataContext';
import NewsBox from '../../components/NewsBox';
import fetchNews from '../../utils/fetchAPI';
import Loading from '../../components/Loading';
import Separator from '../../components/Separator';
import ScrollToTop from '../../components/ScrollToTop';
import filterNews from '../../utils/filterNews';
import NewsFilter from '../../components/NewsFilter';

export default function Home() {
  const [page, setPage] = useState(2);
  const [isLoadingMorePages, setIsLoadingMorePages] = useState(false);
  const { filter } = useContext(DataContext);

  const {
    news,
    setNews,
    setLatestNews,
    isLoading,
    setIsLoading } = useContext(DataContext);

  useEffect(() => {
    setIsLoading(true);
    fetchNews().then((result) => {
      const filteredNews = filterNews(result.items, filter);
      const latestNews = filteredNews[0];
      const otherNews = filteredNews.slice(1);
      setNews(otherNews);
      setLatestNews(latestNews);
      setIsLoading(false);
    });
  }, [setNews, setLatestNews, setIsLoading, filter]);

  const handleLoadMorePages = () => {
    const pageNumber = page.toString();

    setIsLoadingMorePages(true);

    fetchNews(pageNumber).then((result) => {
      const filteredNews = filterNews(result.items, filter);
      setNews([...news, ...filteredNews]);
      setPage(page + 1);
      setIsLoadingMorePages(false);
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="container-md">
      <p className="mb-2">Filtros:</p>
      <NewsFilter />
      <LatestNews />
      <Separator />
      <div className="mt-5 mb-5 row">
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
              data-testid="additional-news"
            >
              Carregar mais
            </button>
          )}
      </div>
      <ScrollToTop />
    </main>
  );
}
