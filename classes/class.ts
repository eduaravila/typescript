abstract class Animal {
  // ? If a class is abstract can't be instanciated
  static makeNoise = (noise: string): void => {
    // * this is a static method and can be used, either if you dont have an instance of the class
    console.log("Mi animal noise is: ", noise);
  };

  readonly name: string;
  protected hobbies: string[] = []; // ? all the children classes can still modify this property. unlike with the private one that only can be modified in it class
  constructor(name: string) {
    this.name = name;
  }
  abstract calculateAge(age: number): void;

  getName = (): void => {
    console.log(this.name);
  };
  getHobbies = (): void => {
    console.log(this.hobbies);
  };
  addHobbie = (hobbie: string): void => {
    this.hobbies = [...this.hobbies, hobbie];
    console.log(this.hobbies);
  };
}

class Dog extends Animal {
  // * this
  constructor(public color: string, public name: string) {
    super(name);
  }
  getColor = (): void => {
    console.log("Mi color is:", this.color);
  };
  addHobbie = (hobbi: string): void => {
    this.hobbies = [...this.hobbies, `${hobbi}.`];
  };

  calculateAge = (age: number): void => {
    // * Calculate the age of a dog based on human years
    console.log("Mi age in dog years is: ", age * 3);
  };
}

class SingletonExample {
  private static instance: SingletonExample;

  private constructor(public name: string) {}
  get getName() {
    return this.name;
  }

  static getInstance(): SingletonExample {
    if (this.instance) {
      return this.instance;
    }
    return new SingletonExample("Singleton");
  }
}
const singleton_single_child = SingletonExample.getInstance();
console.log("singleton name:", singleton_single_child.getName);

const poky = new Dog("Negro", "Poki");
poky.getName();
const afro = new Dog("Black", "afro");

const new_call = { getName: poky.getName };

new_call.getName.apply(afro);
afro.addHobbie("bark");

let tupak = new Dog("Black", "tupack");
tupak.getColor();
tupak.getName();
tupak.addHobbie("Eat dog fod");
Animal.makeNoise("Bark");
