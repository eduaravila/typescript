// ? an interface is a custom type of value

interface Person {
  getName(): string;
}
interface PersonParams {
  name?: string;
  age?: number;
}
interface AnimalType {
  color?: string;
  height?: string;
}

interface readInterface extends PersonParams {
  readonly private_info: string;
}

let private_var: readInterface = {
  private_info: "LMAO",
  
};

// private_var.private_info = "LOL"; // ! you get an error because you want to change a real only variable
let poky_type: AnimalType = {
  color: "Brown",
  height: "21"
};

class PersonClass implements Person, PersonParams {
  name?: string;
  constructor(name?: string, public age?: number) {
    this.name = name;
    this.age = age;
  }

  getName = (): string => {
    if (this.name) return this.name;
    else return "I have no name sorry";
  };
}

console.log(poky_type.color);
