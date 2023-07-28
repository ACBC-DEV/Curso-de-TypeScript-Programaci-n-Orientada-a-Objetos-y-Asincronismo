export class MyDate {
  year: number;
  month: number;
  private day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    console.log(`${day}/${month}/${this.year}`);
    return `${day}/${month}/${this.year}`;
  }
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
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
  getDay() {
    return this.day;
  }
}
const myDate = new MyDate(2000, 1, 10);
myDate.printFormat();
