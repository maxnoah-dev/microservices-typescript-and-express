# Khoá học lập trình microservices với Typescript và Express

https://200lab.io/blog/typescript-la-gi
https://200lab.io/blog/typescript-syntax-co-ban-phan-1
https://200lab.io/blog/typescript-syntax-co-ban-phan-2

## Lesson 01 - Syntax TS Cơ Bản Và OOP

### Tại sao phải sử dụng TypeScript ?
- Typescript - Which are developing and maintaining by Microsoft:
- Gồm nhiều cú pháp nghiêm ngặt.
- Hỗ trợ cả kiểu tĩnh giúp dễ phát hiện lỗi ngay từ khi biên dịch (compile-time) thay vì JS đợi tới lúc chạy chương trình (runtime).
- Thêm nhiều syntax hơn so với JS để hỗ trợ intergration (tích hợp) chặt chẽ hơn với trình biên tập code của mình.
- Bắt lỗi sớm nhất luôn so với JS.
- JS run được ở đâu thì TS run được ở đó.
- An toàn khi dự án ngày càng lớn hơn, sẽ có nhiều tool hơn hỗ trợ nó.

### 7 kiểu dự liệu base
Trong ***TypeScript***:
- Có hỗ trợ **type interface**, tự động hiểu kiểu khai báo của biến. Ví dụ: `let n = 1`
1. String
2. Number
3. Boolean
4. Bigint
5. Undefined
6. Null
7. Symbol


### Khởi tạo Project
1. Chạy `npm i -y`.
2. Cài `ts-node`, `typescript` để setup và cài `tsc --init` để chạy.


### Reference types (kiểu tham chiếu)
- Dùng để chỉ *kiểu dữ liệu* mà **giá trị** của chúng **được lưu trữ** trong *một địa chỉ bộ nhớ*.
- Khi dùng *kiểu tham chiếu*, ta sẽ *không trực tiếp* làm việc với **giá trị của dữ liệu** mà là **tham chiếu (địa chỉ)** đến nơi dữ liệu đó được lưu trữ.
1. **Primitive Type**
- Lưu trữ trực tiếp giá trị trong biến.
- Khi gán một giá trị nguyên thuỷ từ biến này sang biến khác, một bản sao của giá trị được tạo ra.
2. **Reference Types**
- Lưu trữ địa chỉ của giá trị trong biến.
- Khi gán một biến kiểu tham chiếu cho biến khác, cả hai đều trỏ đến cùng một giá trị trong bộ nhớ.

### Function
- Regular function:
  - (this, supper, arguments)
  - Được quyết định lại `this` nằm ở đâu bằng `bind()`.
- Arrow function
  - Không có chức năng `bind()` nên không thay đổi được `this`.
  - Vì vậy cũng không có `super`.

