type animal_type = {
  // * types are similar to interfaces just with diferent sintax
  ability: string;
  name: string;
};

type dog_type = {
  name: string;
  age: number;
};

type maltez_type = animal_type & dog_type; //? this is equal to interface maltez_type extends animal_type, dog_type

type chihuahua_type = maltez_type | dog_type;

const afro_dog: maltez_type = {
  name: "afro",
  ability: "Bark",
  age: 21
};

const poky_dog: chihuahua_type = {
  name: "Poky",
  age: 20
};

const getAbility = (dog: chihuahua_type): string => {
  if ("ability" in dog) {
    return dog.ability;
  } else return "No abilitys registered ";
};

type car_type = {
  car_number: number;
};

type truck_type = {
  car_number: number;
  loadCargo: () => string;
};

type vehicle_type = car_type | truck_type;

class Truck {
  constructor(public car_number: number) {}
  loadCargo = (): string => {
    return "loading the cargo in the truck. " + this.car_number;
  };
}

class Car {
  constructor(public car_number: number) {}
}

const getCargo = (car: vehicle_type): string => {
  if (car instanceof Truck) {
    // ? this is a type guard
    return car.loadCargo();
  }
  return (
    "It's not posible to load the cargo in this vehicle number. " +
    car.car_number
  );
};

const matador_truck = new Truck(123);
const matador_tesla_car = new Car(321);

console.log(getAbility(poky_dog));
console.log(getCargo(matador_truck));
console.log(getCargo(matador_tesla_car));

//?  discriminated unions | type casting
interface horse_type {
  type: "Horse";
  name: string;
  getRunningSpeed: () => number;
}
interface eagle_type {
  type: "Eagle";
  name: string;
  getFlyingSpeed: () => number;
}

type fast_animal_type = horse_type | eagle_type;

const getFastAnimalVelocity = (animal: fast_animal_type): void => {
  switch (animal.type) {
    case "Horse":
      animal.getRunningSpeed();
      break;
    case "Eagle":
      animal.getFlyingSpeed();
      break;
    default:
      break;
  }
};

// ? index properties
interface some_string_type {
  // ? this interface just accept string type key values and string for the key values
  [prop: string]: string;
}

const some_string_val: some_string_type = {
  name: "String"
};

// * type casting

let some_div = document.getElementById("mydiv")! as HTMLDivElement;

//? functions overloads

type combinable_type = string | number;

function some_function(name: string, age: number): string;
function some_function(name: combinable_type, age: combinable_type): string {
  return "Hello my name is " + name + "And my age is " + age;
}

// ? optional chaining

let object_chain = {
  name: "Eduardo",
  role: {
    // name: "Developer | DevOps",
    experience: 2
  }
};

// console.log(object_chain?.role?.name);
let null_var = "";
console.log(null_var ?? null_var);

// const broken_hearts = (name: string | null) => {
//   const inside_function = (epithet: string) => {
//     return name.charAt(0) + " Here is my epithet " + epithet;
//   };
//   name = name || "no name";
//   inside_function("Some stuff");
// };

const broken_hearts_good = (name: string | null) => {
  const inside_function = (epithet: string) => {
    return name!.charAt(0) + " Here is my epithet " + epithet; // ? the exclamation sign deletes the null or undefined to the name type and just belowns the string part type
  };
  name = name || "no name";
  inside_function("Some stuff");
};
