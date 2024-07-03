function getDateTime(dateTimeStr: string) {
  const [date, time] = dateTimeStr.split(' ');
  const [day, month, year] = date.split('/');

  const newsDate = new Date(`${year}-${month}-${day}T${time}`);
  const currentDate = new Date();

  if (newsDate.toDateString() === currentDate.toDateString()) {
    return 'Hoje';
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math
    .round(Math.abs((currentDate.getTime() - newsDate.getTime()) / oneDay));

  return `${diffDays} dia${diffDays > 1 ? 's' : ''} atrás`;
}

export default getDateTime;
