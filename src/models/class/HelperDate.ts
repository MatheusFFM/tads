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
}
