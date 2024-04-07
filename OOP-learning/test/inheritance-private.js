class User {
  #e;
  static count = 0;
  constructor(id, name, salary, expSalary) {
    this.i = id;
    this.n = name;
    this.s = salary;
    this.#e = expSalary;
    User.count++;
  }
  sayHello() {
    return `hello ${this.n}`;
  }
  static countMembers() {
    return `${this.count} members created`;
  }
  getExpSalary() {
    return `the expected salary is ${parseInt(this.#e)}`;
  }
}

class Admin extends User {
  constructor(id, name, salary, expSalary, permissions) {
    super(id, name, salary, expSalary);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, name, salary, expSalary, permissions, ability) {
    super(id, name, salary, expSalary, permissions);
    this.a = ability;
  }
}

let superman1 = new Superman(4, "ismail", 40000, "30000 gneh", 2, "show");
let admin1 = new Admin(1, "mostafa", 20000, "30000 gneh", 1);
let admin2 = new Admin(2, "mohamed", 30000, "30000 gneh", 1);

let userOne = new User(1, "ahmed", 1000, "30000 gneh");
let userTwo = new User(2, "osama", 7000, "30000 gneh");
let userThree = new User(3, "mamdouh", 9000, "30000 gneh");
console.log(userOne.i);
console.log(userTwo.n);
console.log(userThree.s);
console.log(User.countMembers()); // 3 members
console.log(userOne.sayHello());
console.log(superman1.a);
console.log(superman1.sayHello());
console.log(superman1.getExpSalary());
console.log(Admin.prototype);
console.log(userOne);
