export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    console.log(`${this.year}-${this.month}-${this.day}`);
    return `${this.year}-${this.month}-${this.day}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this.day += amount;
        break;
      case 'months':
        this.month += amount;
        break;
      case 'years':
        this.year += amount;
        break;
    }
  }
}
const myDate = new MyDate(2000, 1, 15);
myDate.printFormat();
myDate.add(3, 'days');
myDate.printFormat();
myDate.add(5, 'months');
myDate.printFormat();
myDate.add(5, 'years');
myDate.printFormat();
