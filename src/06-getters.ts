export class MyDate {
  //obligatorio usiganar alcance public o private
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) {}

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
        this._day += amount;
        break;
      case 'months':
        this.month += amount;
        break;
      case 'years':
        this.year += amount;
        break;
    }
  }
  get day() {
    return this._day;
  }
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}
const myDate = new MyDate(2000, 1, 10);
myDate.printFormat();
console.log(myDate.isLeapYear);
