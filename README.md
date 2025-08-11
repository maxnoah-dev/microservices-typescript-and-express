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
*Sẽ được trình bày trong bài tiếp theo*

##### **🔄 Polymorphism (Tính Đa Hình)**
*Sẽ được trình bày trong bài tiếp theo*
