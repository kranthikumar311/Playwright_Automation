// tests/api/api-tests.spec.ts

import { test, expect, request } from '@playwright/test';

test.describe('API Backend Testing Suite', () => {

  test('GET user data', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toHaveProperty('id', 1);
    expect(data).toHaveProperty('name');
  });

  test('POST new user', async ({ request }) => {
    const newUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
      data: newUser
    });

    expect(response.status()).toBe(201);
    const data = await response.json();
    expect(data.name).toBe('John Doe');
    expect(data.email).toBe('john@example.com');
  });

});
