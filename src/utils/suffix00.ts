const suffix00 = (date: string) => {
  const len = date.length;

  if (len === 10) {
    return `${date} 00:00:00`;
  }

  if (len === 13) {
    return `${date}:00:00`;
  }

  if (len === 16) {
    return `${date}:00`;
  }

  return date;
};

export default suffix00;
