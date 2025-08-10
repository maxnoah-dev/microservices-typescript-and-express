let testString: string = 'Pham Hoang Son'
let testNumber:number = 123
let testBoolean: boolean = true
let testBigint: bigint = 19819812645498412315648949818198191156481189n
let testUndefined: undefined
let testNull: null = null
let testSympol: symbol = Symbol('uniqueKey')

testString = 'newChangedString'

console.log(testString)
console.log(testNumber)
console.log(testBoolean)
console.log(testBigint)
console.log(testUndefined)
console.log(testNull)
console.log(testSympol);

/* ---------------------------- */

let a = 1
let b = 5
a = b // x = 5
b = 7
console.log('a = ', a);
console.log('b = ', b);

/* ---------------------------- */

// Kiểu tham trị
let x = {a: 1, b: 2}
let y = x // y.a = 1, y.b = 2

y.a = 10 // y.a = 10, y.b = 2'
console.log('x = ', x); // x.a = 10, x.b = 2
console.log('y = ', y);

/* ---------------------------- */

let testNumberArr: number[] = [1, 2, 3, 4, 5, 6]
let newTest = testNumberArr
testNumberArr[0] = 10
console.log(newTest);

let testStringArr: string[] = ['Hi', 'Hello', 'Bojuar']
let testBooleanArr: boolean[] = [true, false, true, true]
let testObjArr: object[] = [
    {name: 'Pham Hoang Son', age: 18, address: 'TN'},
    {email: 'asdqwe123', password: 'asdqwe!@#'}
]
let testAnyArr: any[] = ['Pham Hoang Son', {color: 'red'}, true, 123456]
let testVariablTypeSetting: [string, number, boolean] = ['Pham Hoang Son', 21, true]

testNumberArr.push(10)
testStringArr.push('Pham Hoang Son')
console.log(testStringArr);

let color: [number, number, number] = [145861, 415683, 321456]
/* ---------------------------- */

let testObj = {
    name: 'Pham Hoang Son',
    age: 21,
}

let testUnion: (number | string | boolean)[] = ['son', 10, true]
let testUnion1: string | number = 'ok'
console.log(typeof(testObj));
let testUnionTypeDefination: [number | string, string | boolean, bigint | object] = [123, true, {name: 'son' , age: 21}]
console.log(testUnionTypeDefination)
/* ---------------------------- */
// Object Shape
let testObjVariableTypeSetting: {
    name: string,
    age: number,
    des: string,
    isActive: boolean,
} = {name: 'Son', age: 21, des: 'Handsome', isActive: true}

/* ---------------------------- */

function regularFunc(a: number, b: number): number {
    return a + b;
}

function doVoid(): void {}

const arrFunc = (a: number, b: number): number => {
    return a + b;
}

const arrFunc02 = (a: number, b: number): number => a + b;

const arrFunc03 = (a: number, b: number): number => {
    return a + b;
};

const testStringArrowFunc = ():void => {
    console.log('Hello')
}

console.log(testStringArrowFunc)

/* ---------------------------- */
function* test(index: number) {
    while (index < 2) {
        yield index;
        index++;
    }
    return index;
}

const testCase = test(0);
console.log(testCase)
console.log(testCase.next().value)
console.log(testCase.next().value)
console.log(testCase.next().value)
console.log(testCase.next().value)