import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './styles.css';

export default function FavoriteHeart({ isFavorite }: { isFavorite: boolean }) {
  return (
    <div className="favorite_heart">
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
