// 1. Tạo đối tượng ban đầu
const original = {
  name: "Bob",
  age: 30
};

// 2. Sao chép đối tượng bằng Spread Operator (...)
const copy = { ...original };

// 3. Thay đổi thuộc tính name của đối tượng copy
copy.name = "Charlie";

// 4. In cả hai đối tượng ra màn hình để kiểm tra
console.log("Original:", original);
console.log("Copy:", copy);