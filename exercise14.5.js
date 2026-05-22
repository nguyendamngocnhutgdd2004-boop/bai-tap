// 1. Khai báo danh sách sinh viên ban đầu (Mảng chứa các đối tượng)
const studentList = [
  { id: "SV01", name: "Nguyễn Văn A", age: 20 },
  { id: "SV02", name: "Trần Thị B", age: 21 }
];

// FUNCTION 1: Thêm sinh viên mới
function addStudent(id, name, age) {
  // Kiểm tra xem ID đã tồn tại chưa để tránh trùng lặp
  const isExist = studentList.some(student => student.id === id);
  
  if (isExist) {
    console.log(`❌ Lỗi: Mã sinh viên ${id} đã tồn tại!`);
    return;
  }

  // Tạo đối tượng sinh viên mới và thêm vào mảng
  const newStudent = { id: id, name: name, age: age };
  studentList.push(newStudent);
  console.log(`✅ Đã thêm sinh viên: ${name}`);
}

// FUNCTION 2: Hiển thị danh sách sinh viên
function displayStudents() {
  console.log("=== DANH SÁCH SINH VIÊN ===");
  if (studentList.length === 0) {
    console.log("Danh sách trống.");
    return;
  }
  
  // Duyệt mảng đối tượng bằng vòng lặp for
  for (let i = 0; i < studentList.length; i++) {
    console.log(`STT: ${i + 1} | ID: ${studentList[i].id} | Tên: ${studentList[i].name} | Tuổi: ${studentList[i].age}`);
  }
}

// FUNCTION 3: Xóa sinh viên theo ID
function deleteStudentById(id) {
  // Tìm vị trí (chỉ số index) của sinh viên có ID trùng khớp
  let foundIndex = -1;
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === id) {
      foundIndex = i;
      break; // Tìm thấy thì dừng vòng lặp ngay
    }
  }

  // Nếu tìm thấy (index khác -1), tiến hành xóa
  if (foundIndex !== -1) {
    studentList.splice(foundIndex, 1); // Xóa 1 phần tử tại vị trí tìm thấy
    console.log(`✅ Đã xóa thành công sinh viên có ID: ${id}`);
  } else {
    // Nếu không tìm thấy, thông báo lỗi
    console.log(`❌ Lỗi: Không tìm thấy sinh viên có ID: ${id}`);
  }
}

// === CHẠY THỬ CHƯƠNG TRÌNH ===

// 1. Hiển thị danh sách ban đầu
displayStudents();

// 2. Thêm sinh viên mới
addStudent("SV03", "Lê Văn C", 22);
displayStudents(); // Kiểm tra lại danh sách sau khi thêm

// 3. Xóa sinh viên có ID "SV02"
deleteStudentById("SV02");
displayStudents(); // Kiểm tra lại danh sách sau khi xóa

// 4. Thử xóa một ID không tồn tại để kiểm tra thông báo lỗi
deleteStudentById("SV99");
