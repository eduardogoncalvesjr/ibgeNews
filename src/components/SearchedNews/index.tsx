import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Separator from '../Separator';

export default function SearchedNews() {
  const { searchedNews } = useContext(DataContext);

  return (
    <div>
      {
        searchedNews.length !== 0
        && (
          <div className="searched_news">
            <Separator />
            <h5 className="mt-2">Sua busca:</h5>
            <ul>
              {searchedNews.map((news) => (
                <li
                  key={ news.id }
                  className="mb-2"
                >
                  <a href={ news.link }>
                    {news.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
}
