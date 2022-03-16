
const engineer = require('../lib/Engineer')

describe('engineer'), () => {
const enginner = new engineer ('chris', 'chris@gmail.com', 'america24')

test('have github user name of America', () => {
expect(engineer.githubUsername).toBe('America24')
})
}