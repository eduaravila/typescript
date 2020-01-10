// ? generic function
function someobjs<T, U>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

let some1 = {
  name: "String",
  age: 1
};
let some2 = {
  name: "String",
  age: "1"
};

interface string_type {
  length: number;
}
function contrainsFunction<T extends object, U extends string_type>(
  obj1: T,
  exp_string: U
): object {
  return { ...obj1 };
}
// contrainsFunction({}, 1);
contrainsFunction({}, "some text with the lenght property");

function get_element_with_index<T extends object, U extends keyof T>(
  obj1: T,
  index: U
) {
  return obj1[index];
}
let new_some = someobjs(some1, some2);

let dog_object = {
  name: "Gochila",
  age: 12
};

interface dog_object_type {
  name: string;
  age: number;
}

function partial_function(name: string, age: number): dog_object_type {
  let new_dog: Partial<dog_object_type> = {};
  new_dog.name = "Poky";
  new_dog.age = 30;
  return new_dog as dog_object_type;
}

get_element_with_index(dog_object, "age");
console.log(new_some.age);

class Some<T extends string | boolean> {
  habilities: string[];
  constructor(protected name: T) {
    this.habilities = [];
  }
  getHability(index: number) {
    return this.habilities[index]!;
  }
}
