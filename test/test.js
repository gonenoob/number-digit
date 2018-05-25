const { minInt, minDec, maxDec, minDig, maxDig } = require('number-digit')
let num = 27.1335
let str = '12a'

test('it should be 00027.1335', () => {
  let v = minInt(num, 5)
  expect(v).toBe('00027.1335')
})

test('it should be 027.1335', () => {
  let v = minInt(num, 3)
  expect(v).toBe('027.1335')
})

test('it should be 27.1335', () => {
  let v = minInt(num, 1)
  expect(v).toBe('27.1335')
})

test('it should be 27.1335', () => {
  let v = minInt(num, 2)
  expect(v).toBe('27.1335')
})

test('it should be 000000000000000000027.1335', () => {
  let v = minInt(num, 21)
  expect(v).toBe('000000000000000000027.1335')
})

test('it should be undefined', () => {
  let v = minInt(num, 22)
  expect(v).toBe(undefined)
})

test('it should be undefined', () => {
  let v = minInt(str, 22)
  expect(v).toBe(undefined)
})

test('it should be 27.1335', () => {
  let v = minDec(num, 1)
  expect(v).toBe('27.1335')
})

test('it should be 27.1335', () => {
  let v = minDec(num, 3)
  expect(v).toBe('27.1335')
})

test('it should be 27.13350', () => {
  let v = minDec(num, 5)
  expect(v).toBe('27.13350')
})

test('it should be 27.13350000000000000000', () => {
  let v = minDec(num, 20)
  expect(v).toBe('27.13350000000000000000')
})

test('it should be undefined', () => {
  let v = minDec(num, 21)
  expect(v).toBe(undefined)
})

test('it should be 27.1', () => {
  let v = maxDec(num, 1)
  expect(v).toBe('27.1')
})

test('it should be 27.134', () => {
  let v = maxDec(num, 3)
  expect(v).toBe('27.134')
})

test('it should be 27.1335', () => {
  let v = maxDec(num, 4)
  expect(v).toBe('27.1335')
})

test('it should be 27.1335', () => {
  let v = maxDec(num, 5)
  expect(v).toBe('27.1335')
})

test('it should be 27.1335', () => {
  let v = maxDec(num, 20)
  expect(v).toBe('27.1335')
})

test('it should be undefined', () => {
  let v = maxDec(num, 21)
  expect(v).toBe(undefined)
})