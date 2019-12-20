const function_with_type: (number1: number) => void = number1 => {
  console.log(number1);
};

const function_with_default_value: (number1: number) => void = (
  number1 = 1
) => {
  console.log("====================================");
  console.log(number1);
  console.log("====================================");
};
