import { useEffect, useState } from 'react';
import { DataProviderProps, ItemsType } from '../types';
import DataContext from './DataContext';

export default function DataProvider({ children }: DataProviderProps) {
  const [user, setUser] = useState<string>('');
  const [news, setNews] = useState<ItemsType[]>([]);
  const [latestNews, setLatestNews] = useState<ItemsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    const URL = 'http://servicodados.ibge.gov.br/api/v3/noticias';

    try {
      const response = await fetch(URL);
      const result = await response.json();
      setNews(result.items);
      setLatestNews(result.items[0]);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  // const loadNextPage = async (page:string) => {

  // };

  useEffect(() => {
    fetchNews();
  }, []);

  const value = {
    user,
    setUser,
    news,
    setNews,
    latestNews,
    setLatestNews,
    isLoading,
    setIsLoading,
  };

  return (
    <DataContext.Provider value={ value }>
      {children}
    </DataContext.Provider>
  );
}
