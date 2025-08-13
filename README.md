# Khóa học Lập trình Microservices với TypeScript và Express

## 📚 Tài liệu tham khảo
- [TypeScript là gì?](https://200lab.io/blog/typescript-la-gi)
- [TypeScript Syntax Cơ Bản - Phần 1](https://200lab.io/blog/typescript-syntax-co-ban-phan-1)
- [TypeScript Syntax Cơ Bản - Phần 2](https://200lab.io/blog/typescript-syntax-co-ban-phan-2)

---

## 🎯 Lesson 01: TypeScript Syntax Cơ Bản và OOP

### ❓ Tại sao phải sử dụng TypeScript?

TypeScript được phát triển và duy trì bởi **Microsoft** với những ưu điểm vượt trội:

- ✅ **Cú pháp nghiêm ngặt** - Giúp code an toàn và nhất quán
- ✅ **Kiểm tra kiểu tĩnh** - Phát hiện lỗi ngay từ compile-time thay vì runtime
- ✅ **Tích hợp mạnh mẽ** - Hỗ trợ tốt với các IDE và editor
- ✅ **Phát hiện lỗi sớm** - So với JavaScript truyền thống
- ✅ **Tương thích hoàn toàn** - JS chạy được ở đâu thì TS chạy được ở đó
- ✅ **An toàn cho dự án lớn** - Nhiều tool hỗ trợ và kiểm soát chất lượng

---

### 🔢 7 Kiểu Dữ Liệu Cơ Bản

TypeScript hỗ trợ **type inference** - tự động hiểu kiểu dữ liệu của biến:

```typescript
let n = 1;  // TypeScript tự động hiểu n là number
```

| # | Kiểu Dữ Liệu | Mô Tả |
|---|---------------|--------|
| 1 | `string` | Chuỗi ký tự |
| 2 | `number` | Số nguyên và số thập phân |
| 3 | `boolean` | Giá trị đúng/sai |
| 4 | `bigint` | Số nguyên lớn |
| 5 | `undefined` | Chưa được định nghĩa |
| 6 | `null` | Giá trị rỗng |
| 7 | `symbol` | Giá trị duy nhất |

---

### 🚀 Khởi Tạo Project

```bash
# 1. Khởi tạo package.json
npm init -y

# 2. Cài đặt dependencies
npm install typescript ts-node

# 3. Khởi tạo TypeScript config
npx tsc --init
```

---

### 🔗 Reference Types (Kiểu Tham Chiếu)

#### **Khái niệm**
- **Reference Types**: Kiểu dữ liệu mà giá trị được lưu trữ trong **địa chỉ bộ nhớ**
- Khi làm việc với reference types, ta thao tác với **tham chiếu (địa chỉ)** chứ không phải **giá trị trực tiếp**

#### **So sánh với Primitive Types**

| **Primitive Types** | **Reference Types** |
|---------------------|---------------------|
| Lưu trữ **giá trị trực tiếp** trong biến | Lưu trữ **địa chỉ** của giá trị trong biến |
| Khi gán, tạo ra **bản sao** của giá trị | Khi gán, cả hai biến **trỏ đến cùng một giá trị** |

#### **Ví dụ Code**
```typescript
// Kiểu tham chiếu - Object
let x = { a: 1, b: 2 };
let y = x;  // y trỏ đến cùng object với x

y.a = 10;   // Thay đổi giá trị trong object
console.log('x =', x);  // x.a = 10, x.b = 2
console.log('y =', y);  // y.a = 10, y.b = 2
```

---

### ⚡ Function

#### **Regular Function**
- Có `this`, `super`, `arguments`
- Có thể thay đổi `this` bằng `bind()`

#### **Arrow Function**
- Không có `this`, `super`, `arguments`
- Không thể thay đổi `this` bằng `bind()`

#### **Ví dụ Code**
```typescript
// Regular Function
function regularFunc(a: number, b: number): number {
    return a + b;
}

function doVoid(): void {
    // Không return gì
}

// Arrow Function
const arrFunc = (a: number, b: number): number => {
    return a + b;
};

const arrFunc02 = (a: number, b: number): number => a + b;

const testStringArrowFunc = (): void => {
    console.log('Hello');
};

console.log(testStringArrowFunc);
```

---

### 🏗️ Software Architecture

#### **1. OOP (Object-Oriented Programming)**

**Định nghĩa**: Kỹ thuật lập trình dựa trên **concept của Objects**

**Đặc điểm**:
- Object chứa **data** và **code**
- **Data** → dưới dạng **fields** (attributes/properties)
- **Code** → dưới dạng **methods** (procedures)

**4 Building Blocks**:
- `Class` - Khung mẫu
- `Attribute` - Thuộc tính
- `Method` - Phương thức
- `Object` - Thực thể (instance của Class)

---

#### **2. OOP - Four Main Principles**

##### **🎯 Abstraction (Tính Trừu Tượng)**
**Mục đích**: Đơn giản hóa interface, ẩn chi tiết phức tạp, tập trung vào **WHAT**

**Ví dụ thực tế**: Nhà sản xuất xe hơi
- Tạo **abstract class** `Engine` với method `start()`
- Khách hàng chỉ cần biết: "Engine có thể start"
- Không cần biết bên trong `start()` làm gì

**Tóm tắt**: Đơn giản hóa interface, ẩn chi tiết phức tạp, về tính dễ sử dụng

##### **🔒 Encapsulation (Tính Bao Đóng)**
**Mục đích**: Bảo vệ dữ liệu, kiểm soát quyền truy cập, tập trung vào **HOW**

**Ví dụ thực tế**: Quản lý các loại chim
- Tạo class `Birds` chứa thuộc tính chung (lông, cánh, hành vi bay)
- Quản lý thông qua class thay vì viết riêng cho từng loại chim

**Tóm tắt**: Bảo vệ dữ liệu, kiểm soát quyền truy cập, về tính bảo mật

##### **🔄 Inheritance (Tính Kế Thừa)**
##### **🔄 Polymorphism (Tính Đa Hình)**

#### **3. SOLID Principles**

##### **🎯 S - Single Responsibility Principle (Nguyên lý Đơn nhiệm vụ)**
**Mục đích**: Một `Class` chỉ nên có duy nhất 1 nhiệm vụ, 1 lý do để thay đổi.

**Lợi ích**: 
- Dễ maintain và test
- Ít ảnh hưởng khi thay đổi
- Code rõ ràng, dễ hiểu

**Ví dụ**: 
- ❌ **Sai**: Class `User` vừa quản lý thông tin user, vừa gửi email, vừa validate data
- ✅ **Đúng**: Tách thành `User` (quản lý thông tin), `EmailService` (gửi email), `UserValidator` (validate)

##### **🔓 O - Open/Closed Principle (Nguyên lý Mở/Đóng)**
**Mục đích**: Software entities nên **mở để mở rộng** nhưng **đóng để sửa đổi**.

**Cách thực hiện**: Sử dụng abstraction, inheritance, và polymorphism
- **Mở rộng**: Thêm class mới kế thừa từ base class
- **Không sửa**: Không thay đổi code của base class

**Ví dụ**: 
```typescript
// Base class - không thay đổi
abstract class PaymentMethod {  
    abstract processPayment(amount: number): boolean;
}

// Mở rộng - thêm class mới
class CreditCardPayment extends PaymentMethod {
    processPayment(amount: number): boolean {   
        // Logic xử lý credit card
        return true;
    }
}

class PayPalPayment extends PaymentMethod {
    processPayment(amount: number): boolean {
        // Logic xử lý PayPal
        return true;
    }
}
```

##### **🔄 L - Liskov Substitution Principle (Nguyên lý Thay thế Liskov)**
**Mục đích**: Subtypes phải có thể thay thế base types mà không làm thay đổi tính đúng đắn của chương trình.

**Quy tắc**: 
- Subclass phải implement đầy đủ interface của base class
- Không được làm yếu đi các điều kiện của base class

**Ví dụ**: 
- ✅ **Đúng**: `Rectangle` và `Square` đều có thể thay thế cho `Shape` (cùng có method `getArea()`)
- ❌ **Sai**: `Penguin` kế thừa từ `Bird` nhưng không thể bay (vi phạm contract của base class)

##### **🔌 I - Interface Segregation Principle (Nguyên lý Phân tách Interface)**
**Mục đích**: Clients không nên bị ép buộc implement những methods mà họ không sử dụng.

**Cách thực hiện**: Tách interface lớn thành nhiều interface nhỏ, chuyên biệt

**Ví dụ**: 
```typescript
// ❌ Sai: Interface quá lớn
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

// ✅ Đúng: Tách thành nhiều interface nhỏ
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}

// Robot chỉ cần implement Workable
class Robot implements Workable {
    work(): void {
        console.log("Robot working...");
    }
}
```

##### **📦 D - Dependency Inversion Principle (Nguyên lý Đảo ngược Phụ thuộc)**
**Mục đích**: 
- High-level modules không nên phụ thuộc vào low-level modules
- Cả hai nên phụ thuộc vào abstractions
- Abstractions không nên phụ thuộc vào details

**Cách thực hiện**: Sử dụng dependency injection và interfaces

**Ví dụ**: 
```typescript
// ❌ Sai: High-level phụ thuộc trực tiếp vào low-level
class UserService {
    private database = new MySQLDatabase(); // Phụ thuộc cứng
}

// ✅ Đúng: Phụ thuộc vào abstraction
interface Database {
    save(data: any): void;
}

class UserService {
    constructor(private database: Database) {} // Dependency injection
}

// Có thể inject bất kỳ database nào implement interface Database
const userService = new UserService(new MySQLDatabase());
const userService2 = new UserService(new MongoDBDatabase());
```