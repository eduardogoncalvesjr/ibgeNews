import { useState } from 'react';
import { DataProviderProps, ItemsType } from '../types';
import DataContext from './DataContext';

export default function DataProvider({ children }: DataProviderProps) {
  const [user, setUser] = useState<string>('');
  const [news, setNews] = useState<ItemsType[]>([]);
  const [latestNews, setLatestNews] = useState<ItemsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
