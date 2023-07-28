const date = new Date();
date.getTime();
date.getHours();
date.toISOString();

const date2 = new Date(1993, 1, 12); //0 enero 11 dic
date2.getHours();
date2.getTime();
date2.getMinutes();

console.log(date);
console.log(date2);

let myVar;

export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2004, 12, 5);
console.log(myDate);
