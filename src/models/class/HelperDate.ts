export default class HelperDate {
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  public getDateFormat(dateParam: Date): string {
    const date = new Date(dateParam);
    const day = date.getDate().toString();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  public sameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
