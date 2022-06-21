const arr = [1, 3, 434, 34];
const myFunc = (a) => {
  console.log(`Тоо: ${a}`);
};
const arr1 = [...arr, 12, 32];

myFunc(arr1[5]);
