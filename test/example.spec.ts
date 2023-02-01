import { expect, test } from 'vitest'

test('o usuário consegue criar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toBe(201)
})
