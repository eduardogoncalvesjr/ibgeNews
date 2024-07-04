const fetchByText = async (text: string) => {
  const URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?busca=';

  const response = await fetch(`${URL}${text}`);

  if (!response.ok) {
    throw new Error('Error fetching the API.');
  }

  const result = await response.json();

  return result;
};

export default fetchByText;
