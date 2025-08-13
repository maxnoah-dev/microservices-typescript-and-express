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

console.log('/* ---------------------------- */')

console.log('Kiểu tham chiếu')

let a = 1
let b = 5
a = b // x = 5
b = 7
console.log('a = ', a);
console.log('b = ', b);

console.log('/* ---------------------------- */')

console.log('Kiểu tham trị')
// Kiểu tham trị
let x = {a: 1, b: 2}
let y = x // y.a = 1, y.b = 2

y.a = 10 // y.a = 10, y.b = 2'
console.log('x = ', x); // x.a = 10, x.b = 2
console.log('y = ', y);

console.log('/* ---------------------------- */')

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

console.log('/* ---------------------------- */')

let testObj = {
    name: 'Pham Hoang Son',
    age: 21,
}

let testUnion: (number | string | boolean)[] = ['son', 10, true]
let testUnion1: string | number = 'ok'
console.log(typeof(testObj));
let testUnionTypeDefination: [number | string, string | boolean, bigint | object] = [123, true, {name: 'son' , age: 21}]
console.log(testUnionTypeDefination)

console.log('/* ---------------------------- */')

// Object Shape
let testObjVariableTypeSetting: {
    name: string,
    age: number,
    des: string,
    isActive: boolean,
} = {name: 'Son', age: 21, des: 'Handsome', isActive: true}

console.log('/* ---------------------------- */')

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

console.log('/* ---------------------------- */')

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

console.log('/* ---------------------------- */')

class Cat {
    // name?: string // `?` allow this attribute is undefined
    // age!: number // affirm when I use it, age attribute will have data

    // constructor (name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

    constructor (public readonly name: string, public readonly age: number) {}

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

const Mew01 = new Cat('Milo', 2);

console.log(Mew01);
console.log(Mew01.name + '-' + Mew01.age + '-' + Mew01.eat());

console.log('/* ---------------------------- */')

abstract class Animal01 {
    constructor (public readonly name: string) {}

    eat(): void {
        console.log(`${this.name} is eating`);
    }
}

abstract class Animal02 {
    constructor (readonly name: string) {}

    abstract eat(): void
}

class Dog extends Animal01 {

}

class Buffalo extends Animal02 {
    eat(): void {
        console.log(`${this.name} eats grass`);
    }
}

const myDog = new Dog('Milo')
const myBuffalo = new Buffalo('Cow Cow')
console.log(myDog.eat());
console.log(myBuffalo.eat());

console.log('/* ---------------------------- */')

console.log('Test framework, engine');
// Framework
abstract class Element {
    abstract render(): string
}

function engine(nodes: Element[]): string[] {
    return nodes.map(n => n.render())
}
//

// Client code
class ImageElement extends Element {
    render(): string {
        return 'img';
    }
}

class TextElement extends Element {
    render(): string {
        return 'text';
    }
}

class HyperText extends TextElement {
    // Override
    render(a?: number): any {
        if (!a) return 'hyper-text';
        else return a;
    }

    // Overload - Chỉ cần cùng tên, có thể khác tham số, khác
    // render(a: number) {
    //     return a;
    // }
}

const res = engine([new ImageElement(), new TextElement(), new HyperText()]);
console.log('Test Hyper element res: ' + new HyperText().render(100000000));
console.log(res)

console.log('/* ---------------------------- */')

console.log('Example of Encapsulation')

class CarEngine {
    public start() {
        this.step1();
        this.step2();
        this.step3();
    }

    private step1(): void {
        console.log('Step 1');
    }
    private step2(): void {
        console.log('Step 2');
    }
    private step3(): void {
        console.log('Step 3');
    }
}

const myCarEngine = new CarEngine();
console.log(myCarEngine.start());

console.log('/* ---------------------------- */')

console.log('Example of Abstraction')

abstract class Engine {
    abstract start(): void
    abstract stop(): void
}

class GasolineEngine extends Engine {
    start(): void {
        console.log("1. Kiểm tra xăng");
        console.log("2. Đánh lửa");
        console.log("3. Khởi động");
    }

    stop(): void {
        console.log("Tắt động cơ xăng");
    }
}

class ElectricEngine extends Engine {
    start(): void {
        console.log("1. Kiểm tra pin");
        console.log("2. Khởi động motor điện");
    }

    stop(): void {
        console.log("Tắt motor điện");
    }
}

const myGasolineEngine = new GasolineEngine();
const myElectricEngine = new ElectricEngine();

console.log(myGasolineEngine.start());
console.log(myGasolineEngine.stop());
console.log(myElectricEngine.start());
console.log(myElectricEngine.stop());

console.log('/* ---------------------------- */')

class BankAccount {
    private balance: number = 0;
    private accountNumber: string;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
    }

    public getBalance(): number {
        return this.balance;
    }

    public deposit(amount: number): boolean {
        if (amount > 0) {
            this.balance += amount;
            return true;
        }
        return false;
    }
}

const myAccount = new BankAccount('1234567890');
console.log(myAccount);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(100));

console.log('/* ---------------------------- */')

// Problem: A messy class
class Item {
    public id: string;
    public spec: ItemSpec;
    private imageUrl: string;
    public price: number;
    public quantity: number;

    constructor(
        id: string,
        spec: ItemSpec,
        imageUrl: string,
        price: number,
        quantity: number,
    ) {
        this.id = id;
        this.spec = spec;
        this.imageUrl = imageUrl;
        this.price = price;
        this.quantity = quantity;
    }

    // Getter & Setter

    setPrice(newPrice: number): boolean {
        if (newPrice <= 0) {
            return false;
        }
        this.price = newPrice;
        return true;
    }

    increaseQuantity(amount: number) {
        if (amount < 0) return false;

        this.quantity += amount;
        return true;
    }

    decreaseQuantity(amount: number) {
        if (amount > 0 || (this.quantity - amount < 0)) return false;

        this.quantity -= amount;
        return true;
    }

    compare(spec: ItemSpec): boolean {
        return this.spec.compare(spec)
    }

    encode(encoder: IIeamEncoder): string {
        return encoder.encode(this);
    }
}

class ItemSpec {
    constructor(
        readonly name: string,
        readonly type: string,
        readonly color: string,
    ) {}

    compare(item: ItemSpec): boolean {
        return this.name === item.name &&
            this.type === item.type &&
            this.color === item.color;
    }
}

class DigitalItemSpec extends ItemSpec {
    constructor(
        readonly name: string,
        readonly type: string,
        readonly color: string,
        readonly fileExt: string,
    ) {
        super(name, type, color);
    }

    compare(item: DigitalItemSpec) {
        // return this.fileExt = item.fileExt; // bug
        return super.compare(item) &&
            this.fileExt === item.fileExt;
    }
}

// === compare without convert
// == compare with some convert data
// 0 == false
// 1 == "1" => true vì convert về cùng một type

console.log('Single Responsibility Principle')

console.log('/* ---------------------------- */')

interface IIeamEncoder {
    encode(item: Item): string;
}

class ItemStringEncoder implements IIeamEncoder {
    encode(item: Item): string {
        return `${item.id} - ${item.spec.name} - ${item.spec.type} - ${item.spec.color}`;
    }
}

class ItemJSONEncoder implements IIeamEncoder {
    encode(item: Item): string {
        return `{
            "id": ${item.id},
            "name": ${item.spec.name},
            "type": ${item.spec.type},
            "color": ${item.spec.color},
        }`;
    }
}

// class ItemWrongEncoder implements IIeamEncoder {
//     encode(item: Item): string {
//         throw new Error('error');
//         return '';
//     }
// }

console.log('/* ---------------------------- */')

class Retangle {
    width: number;
    height: number;

    constructor(
        width: number,
        height: number,
    ) {
        this.width = width;
        this.height = height;
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

class Square extends Retangle {
    constructor(height: number, width: number) {
        super(height, width);
    }

    setWidth(width: number) {
        this.width = width;
    }

    setHeight(height: number) {
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const myApp1 = new Retangle(5, 10);
const myApp2 = new Square(5, 10);
console.log(myApp1);
console.log(myApp1.area());
myApp1.setWidth(2);
myApp1.setHeight(10);
console.log("After set Width: " + myApp1);
console.log("After set Height: " + myApp1);