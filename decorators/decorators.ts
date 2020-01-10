const populateElement = (content: string, id: string) => {
  return (_: Function) => {
    let htmlElement = document.getElementById(id)! as HTMLDivElement;
    htmlElement.innerHTML = content;
  };
};

const propertyDecotator = (target: any, varName: string | symbol) => {
  console.log("Property decorator:");
  console.log(target);
  console.log(varName);
};

const accesorDecorator = (target: any, varName: string | symbol) => {
  console.log("Accesor decorator:");
  console.log(target);
  console.log(varName);
};
const methodDecorator = (
  target: any,
  varName: string | symbol,
  details: PropertyDescriptor
) => {
  console.log("Method decorator:");
  console.log(target);
  console.log(varName);
  console.log(details);
};
const paramDecorator = (
  target: any,
  varName: string | symbol,
  number_argument: number
) => {
  console.log("Parameter decorator:");
  console.log(target);
  console.log(varName);
  console.log(number_argument);
};

const return_class_decorator = (log: string) => {
  return <T extends { new (...args: any[]): {} }>(super_constructor: T) => {
    return class extends super_constructor {
      constructor(..._: any[]) {
        super();
        console.log("====================================");
        console.log(log);
        console.log("====================================");
      }
    };
  };
};

@return_class_decorator("<h1>Hello chimichanga</h1>")
class SomeFancyClass {
  @propertyDecotator
  age: string;

  @accesorDecorator
  set setAge(new_age: string) {
    this.age = new_age;
  }
  constructor(public name: string) {
    this.age = "10";
  }

  @methodDecorator
  someMethod(@paramDecorator ephiloge: string) {
    return ephiloge;
  }
}

let some = new SomeFancyClass("fff");

const self_bind_decorator = (
  target: any,
  varname: string | any,
  details: PropertyDescriptor
) => {
  console.log("auto binding");
  let to_bind_method = details.value;
  let new_bind: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    get() {
      const boundFn = to_bind_method.bind(this);
      return boundFn;
    }
  };
  return new_bind;
}; // ? you can replace the details function from the methods and functions decorators

class AutoBindExample {
  title: string = "Some title";

  @self_bind_decorator
  getTitle() {
    console.log(this.title);
  }
}

let button_element_class = new AutoBindExample();
let button_element = document.getElementById("button")! as HTMLButtonElement;

button_element.addEventListener("click", button_element_class.getTitle);
