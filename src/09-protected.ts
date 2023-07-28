export abstract class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Moving along!');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomethig() {
    console.log('dooo');
  }
}
export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i <= times; i++) {
      console.log('woof! ', this.name);
    }
    this.doSomethig();
  }
  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const ringo = new Dog('ringo', 'toni');

ringo.woof(2);
ringo.move();
