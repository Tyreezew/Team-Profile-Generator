const Employee = require('../lib/Employee');

test("should create and return an employee object with details", () => {
    const employee = new Employee('Jane', 34, 'janedoe@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("should return employee name", () => {
    const name = "Jane";
    const employee = new Employee(name,"1", "janedoe@gmail.com");
    expect(employee.getName()).toBe(name);
});

test("should return employee id", () => {
const id = "1";
const employee = new Employee("Jane Doe", id, "janedoe@gmail.com");
expect(employee.getId()).toBe(id);
});

test("should return employee email", () => {
const email = "janedoe@gmail.com";
const employee = new Employee("1", "Jane", email);
expect(employee.getEmail()).toBe(email)
});

test ("should return employee role", () => {
    const role ='Employee';
    const employee = new Employee("1", "Jane", "janedoe@gmail.com")
    expect(employee.getRole()).toBe(role);
})