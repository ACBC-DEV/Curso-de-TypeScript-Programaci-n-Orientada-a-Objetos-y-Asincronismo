export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along!');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}
export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i <= times; i++) {
      console.log('woof');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const ringo = new Dog('Ringo', 'Toni');

console.log(ringo.greeting());
ringo.woof(5);
