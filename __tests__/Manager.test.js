const Manager = require("../lib/Manager");

test('should create manager object', () => {
    const officeNumber = "3456789"
    const manager = new Manager ('Chris Hemsworth', 3, 'hemsworth@gmail.com', officeNumber);
    expect(manager.officeNumber).toEqual(officeNumber);

});

test('should return role', () => {
    const role = "Manager";
    const manager = new Manager("Chris Hemsworth", 3, "hemsworth@gmail.com", 3456789);
    expect(manager.getRole()).toBe(role); 
});

