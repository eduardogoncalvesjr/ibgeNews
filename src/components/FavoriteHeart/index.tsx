import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './styles.css';
import { useEffect, useState } from 'react';
import { ItemsType } from '../../types';

type FavoriteHeartProps = {
  news: ItemsType;
};

export default function FavoriteHeart({ news }: FavoriteHeartProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const currentNews = localStorage.getItem('favoriteNews');
    const favoriteList = currentNews ? JSON.parse(currentNews) : [];

    if (favoriteList
      .some((item: ItemsType) => item.id.toString() === news.id.toString())
    ) {
      setIsFavorite(true);
    }
  }, [news.id]);

  const handleFavorite = (favoriteNews: ItemsType) => {
    const currentNews = localStorage.getItem('favoriteNews');
    const favoriteList = currentNews ? JSON.parse(currentNews) : [];
    const newsId = favoriteNews.id.toString();

    const newsInfo: ItemsType = {
      id: favoriteNews.id,
      titulo: favoriteNews.titulo,
      link: favoriteNews.link,
      imagens: favoriteNews.imagens,
      tipo: favoriteNews.tipo,
      data_publicacao: favoriteNews.data_publicacao,
    };

    if (favoriteList.some((item: ItemsType) => item.id.toString() === newsId)) {
      const filteredList = favoriteList
        .filter((item: ItemsType) => item.id.toString() !== newsId);
      localStorage.setItem('favoriteNews', JSON.stringify(filteredList));
      window.dispatchEvent(new CustomEvent('local-storage-update'));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favoriteNews', JSON.stringify([...favoriteList, newsInfo]));
      window.dispatchEvent(new CustomEvent('local-storage-update'));
      setIsFavorite(true);
    }
  };

  return (
    <button
      className={ `favorite_heart ${isFavorite ? 'favorited' : ''}` }
      onClick={ () => handleFavorite(news) }
      data-testid="favorite-button"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
