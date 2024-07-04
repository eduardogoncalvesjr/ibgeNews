function getCurrentDate() {
  const currentDate = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(currentDate);
}

export default getCurrentDate;
