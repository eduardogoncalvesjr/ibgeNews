const fetchNews = async () => {
  const URL = 'http://servicodados.ibge.gov.br/api/v3/noticias';

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Error fetching the API.');
  }

  const result = await response.json();

  return result;
};

export default fetchNews;
