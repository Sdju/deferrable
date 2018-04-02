import deferrable from '../src/index';

test('test defer', async () => {
  let val = 'no-defer';
  const someFunction = (defer: Function, arg: number) => {
    defer(() => {
      val = arg;
    });
    val = 'no-defer2';
  };
  const changer = deferrable(someFunction);
  await changer('defer!');
  expect(val).toBe('defer!');
});

test('test defer sync', () => {
  let val = 'no-defer';
  const someFunction = (defer: Function, arg: number) => {
    defer(() => {
      val = arg;
    });
    val = 'no-defer2';
  };
  const changer = deferrable(someFunction, true);
  changer('defer!');
  expect(val).toBe('defer!');
});