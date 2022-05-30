const assignDate = () => {
  const { DateTime } = window.luxon;
  const date = DateTime.now().toJSDate();

  return date;
};

export default assignDate;