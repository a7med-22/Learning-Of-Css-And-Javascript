let myObj = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObj, "c", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 3,
});

myObj.c = 200;
console.log(myObj);

console.log(delete myObj.c);

console.log(myObj);

for (let prop in myObj) {
  console.log(prop, myObj[prop]);
}

Object.defineProperties(myObj, {
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
  g: {
    configurable: true,
    value: 7,
  },
});

console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj, "d"));

console.log(Object.getOwnPropertyDescriptors(myObj));
