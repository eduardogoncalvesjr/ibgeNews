import { ItemsType } from '../types';

const filterNews = (news: ItemsType[], filter: string = 'all') => {
  switch (filter) {
    case 'noticias':
      return news.filter((item) => item.tipo === 'Notícia');
    case 'releases':
      return news.filter((item) => item.tipo === 'Release');
    default:
      return news;
  }
};

export default filterNews;
