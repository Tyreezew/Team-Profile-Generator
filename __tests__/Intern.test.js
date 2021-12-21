const Intern = require('../lib/Intern');

test('should create intern object', () => {
    const intern = new Intern('Harry', 123, 'harrypotter@gmail.com', 'Hogwarts University');
    expect(intern.school).toEqual(expect.any(String));
});

test('should return employee school', () => {
    const school = 'Hogwarts Univeristy';
    const intern = new Intern('Harry', 123, 'harrypotter@gmail.com', school);
    expect(intern.getSchool()).toEqual(school);
});

test('should return employeee role', () => {
    const role = 'Intern';
    const intern = new Intern('Harry', 123, 'harrypotter@gmail.com', 'Hogwarts University');
    expect(intern.getRole()).toEqual(role);
});