// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);

function myForEach(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}

function myMap(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i]));
  }
  return newArr;
}

function myFilter(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) { newArr.push(arr[i]); }
  }
  return newArr;
}

function myFind(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}

function myEvery(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i])) {
      return false;
    }
  }
  return true;
}

function mySome(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i])) {
      return true;
    }
  }
  return false;
}

function myReduce(arr, callBack, initialValue) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += callBack(initialValue, arr[i]);
  }
  return sum;
}
