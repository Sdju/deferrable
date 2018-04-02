import {deferable} from '../src/index'



test('test defer', async ()=> {
	let val = 'no-defer';
	const someFunction = (defer: Function, arg: number) => {
		defer(()=> {
			val = arg;
		} );
	};
	const changer = deferable(someFunction);
	await changer('defer!');
	expect(val).toBe('defer');
});