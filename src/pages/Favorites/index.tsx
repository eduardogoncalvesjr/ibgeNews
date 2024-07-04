import { useEffect, useState } from 'react';
import NewsBox from '../../components/NewsBox';
import { ItemsType } from '../../types';

export default function Favorites() {
  const [favoriteNews, setFavoriteNews] = useState<ItemsType[]>([]);

  const loadFavorites = () => {
    const getLocalStorage = localStorage.getItem('favoriteNews');
    const favoriteList = getLocalStorage ? JSON.parse(getLocalStorage) : [];

    setFavoriteNews(favoriteList);
  };

  useEffect(() => {
    loadFavorites();

    const handleStorageChange = () => {
      loadFavorites();
    };

    window.addEventListener('local-storage-update', handleStorageChange);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('local-storage-update', handleStorageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="min-vh-100">
      <h5>
        {favoriteNews.length === 0
          ? 'Nenhuma notícia favorita'
          : 'Suas notícias favoritas:'}
      </h5>
      {favoriteNews.map((news) => (
        <NewsBox
          key={ news.id }
          news={ news }
        />
      ))}
    </div>
  );
}
