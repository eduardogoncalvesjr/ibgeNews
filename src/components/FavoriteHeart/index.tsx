import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './styles.css';
import { useEffect, useState } from 'react';

type FavoriteHeartProps = {
  newsId: string;
};

export default function FavoriteHeart({ newsId }: FavoriteHeartProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const currentNews = localStorage.getItem('favoriteNews');
    const favoriteList = currentNews ? JSON.parse(currentNews) : [];

    if (favoriteList.includes(newsId)) {
      setIsFavorite(true);
    }
  }, [newsId]);

  const handleFavorite = (id: string) => {
    const currentNews = localStorage.getItem('favoriteNews');
    const favoriteList = currentNews ? JSON.parse(currentNews) : [];

    if (favoriteList.includes(id)) {
      const filteredList = favoriteList
        .filter((existingId: string) => existingId !== id);

      localStorage.setItem('favoriteNews', JSON.stringify(filteredList));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favoriteNews', JSON.stringify([...favoriteList, id]));
      setIsFavorite(true);
    }
  };

  return (
    <button
      className={ `favorite_heart ${isFavorite ? 'favorited' : ''}` }
      onClick={ () => handleFavorite(newsId) }
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
