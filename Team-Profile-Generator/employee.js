
const employee = require('../lib/Employee')
describe ("employee", () => {
    const employee = new employee('Chris', 'Chris@gmail.com', '123456')
test('will have a name Chris',() =>{
    expect(employee.name).toBe('Chris')
    expect(employee.getName()).toBe('Chris')
})

test ('will have an email chris@gmail.com',() => {
    expect(employee.email).toEqual('chris@gmail.com')
    expect(employee.getEmail()).toBe('chris@gmail.com')
})


})