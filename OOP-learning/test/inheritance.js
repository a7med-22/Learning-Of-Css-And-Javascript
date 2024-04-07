class User {
  static count = 0;
  constructor(id, name, salary) {
    this.i = id;
    this.n = name;
    this.s = salary;
    User.count++;
  }
  sayHello() {
    return `hello ${this.n}`;
  }
  static countMembers() {
    return `${this.count} members created`;
  }
}

class Admin extends User {
  constructor(id, name, salary, permissions) {
    super(id, name, salary);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, name, salary, permissions, ability) {
    super(id, name, salary, permissions);
    this.a = ability;
  }
}

let superman1 = new Superman(4, "ismail", 40000, 2, "show");
let admin1 = new Admin(1, "mostafa", 20000, 1);
let admin2 = new Admin(2, "mohamed", 30000, 2);

let userOne = new User(1, "ahmed", 2000);
let userTwo = new User(2, "osama", 7000);
let userThree = new User(3, "mamdouh", 9000);

console.log(userOne.i);
console.log(userTwo.n);
console.log(userThree.s);
console.log(User.countMembers()); // 3 members
console.log(userOne.sayHello());
console.log(superman1.a);
console.log(superman1.sayHello());
