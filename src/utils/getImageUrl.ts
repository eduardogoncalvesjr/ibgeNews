const getImageURL = (url: string) => {
  const urlStructure = `https://agenciadenoticias.ibge.gov.br/${url}`;

  return urlStructure;
};

export default getImageURL;
