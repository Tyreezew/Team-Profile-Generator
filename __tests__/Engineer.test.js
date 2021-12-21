const Engineer = require('../lib/Engineer');

test('should create an Engineer object', () => {
    const engineer = new Engineer('Peter', 100, 'peterparker@gmail.com', 'petepark02');
    expect(engineer.github).toEqual(expect.any(String));

});

test('should get engineer github username', () => {
    const github = 'petepark02';
    const engineer = new Engineer('Peter', 100, 'peterparker@gmail.com', github);
    expect(engineer.getGithub()).toEqual(github)
});

test('should return engineer role', () => {
    const role='Engineer';
    const engineer = new Engineer('100', 'Peter', 'peterparker@gmail.com', 'petepark02');
    expect(engineer.getRole()).toEqual(role);

});