const add = (a,b) => a+b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Name checking', () => {
    const str = generateGreeting('Tejas');
    expect(str).toBe('Hello Tejas!');
});

test('Checking if no name passed', () => {
    const str = generateGreeting();
    expect(str).toBe('Hello Anonymous!');
});