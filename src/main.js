const getDaysInRange = (date = new Date(), range = 'month') => {
  let startDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    range === 'month' ? 1 : date.getDate()
  );
  const days = range === 'month' ? 42 : 7;
  const calendarDays = [];

  for (let day = 0; day < days; day++) {
    if (day === 0) {
      const weekdayOfStartDate = startDate.getDay();
      // if weekday of the 1st day of the month is not sunday, change start date to the previous sunday before the start date
      startDate.setDate(startDate.getDate() - weekdayOfStartDate);
    } else {
      startDate.setDate(startDate.getDate() + 1);
    }

    let calendarDay = {
      isCurrentMonth: startDate.getMonth() === date.getMonth(),
      date: new Date(startDate),
      year: startDate.getYear(),
      month: startDate.getMonth(),
      day: startDate.getDate(),
      isToday: startDate === date,
      events: [],
    };

    calendarDays.push(calendarDay);
  }

  return calendarDays;
};

export default getDaysInRange;
