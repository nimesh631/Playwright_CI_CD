const {test, expect} = require('@playwright/test');

test('Get users api returns data',async ({request})=>{
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    expect(response.ok()).toBeTruthy();
    const users = await response.json();
  console.log('Total users:', users.length);

  expect(users.length).toBeGreaterThan(0);
})