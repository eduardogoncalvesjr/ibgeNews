const fetchNews = async (page: string = '1') => {
  const URL = 'http://servicodados.ibge.gov.br/api/v3/noticias/?page=';

  const response = await fetch(`${URL}${page}`);

  if (!response.ok) {
    throw new Error('Error fetching the API.');
  }

  const result = await response.json();

  return result;
};

export default fetchNews;
