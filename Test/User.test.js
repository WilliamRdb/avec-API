// const supertest = require('supertest');
// const app = require('../index')

// const request = supertest.agent(app);

// describe('TEST SUITE FOR HOME ROUTE', () => {
//   describe('this is the test for home route', () => {
//     it('should successfully access the home endpoint', done => {
//       request
//       .get('/')
//       .expect(200)
//       .then(response => {
//         expect(response.status).toEqual(200);
//         done();
//       })
//     })
//   })
// })

const axios = require('axios');
const expectExport = require('expect');
describe('SUITE DE TEST DES ROUTES', () => {
  test('doit renvoyer tous les users', async () => {
    const response = await axios.get('http://localhost:3000/users')
    console.log('users:', response.data)
    const users = response.data
    expect(users.success).toBe(true)
    expect(users.users).toEqual(expect.anything())
  })
  test('doit renvoyer tous les lits', async () => {
    const response2 = await axios.get('http://localhost:3000/beds')
    console.log('beds:', response2.data)
  })
});