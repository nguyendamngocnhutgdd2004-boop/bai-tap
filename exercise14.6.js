/*
  ỨNG DỤNG QUẢN LÝ SÁCH THƯ VIỆN
  book -> id, title, author, year
*/

const library = [
    { id: "B01", title: "Đắc Nhân Tâm", author: "Dale Carnegie", year: 1936 },
    { id: "B02", title: "Nhà Giả Kim",   author: "Paulo Coelho",  year: 1988 }
];

// ====== HÀM BỔ TRỢ ======

function isIdDuplicate(id) {
    return library.some(book => book.id.toLowerCase() === id.toLowerCase());
}

// ====== CHỨC NĂNG 1: THÊM SÁCH ======

function addBook() {
    // Nhập ID - bắt nhập lại nếu bỏ trống hoặc trùng
    let id;
    do {
        id = prompt("Nhập mã sách (ID):");
        if (id === null) return; // Thoát hàm nếu nhấn Cancel
        id = id.trim(); // Xóa khoảng trắng thừa
        if (id === "") {
            alert("ID không được để trống!");
        } else if (isIdDuplicate(id)) {
            alert("Mã sách " + id + " đã tồn tại!");
            id = ""; // Reset để vòng lặp chạy tiếp
        }
    } while (id === "");

    // Nhập tên sách - bắt nhập lại nếu bỏ trống
    let title;
    do {
        title = prompt("Nhập tên sách:");
        if (title === null) return;
        title = title.trim();
        if (title === "") alert("Tên sách không được để trống!");
    } while (title === "");

    // Nhập tác giả - bắt nhập lại nếu bỏ trống
    let author;
    do {
        author = prompt("Nhập tên tác giả:");
        if (author === null) return;
        author = author.trim();
        if (author === "") alert("Tên tác giả không được để trống!");
    } while (author === "");

    // Nhập năm - bắt nhập lại nếu không phải số hợp lệ
    let year;
    do {
        let yearInput = prompt("Nhập năm xuất bản:");
        if (yearInput === null) return; // Thoát hàm an toàn khi nhấn Cancel
        
        year = parseInt(yearInput);
        if (isNaN(year) || year <= 0) {
            alert("Năm xuất bản không hợp lệ! Vui lòng nhập số nguyên dương.");
            year = NaN; // Lực chọn giá trị để tiếp tục lặp
        }
    } while (isNaN(year));

    library.push({ id, title, author, year });
    alert('Đã thêm sách "' + title + '" thành công!');
}

// ====== CHỨC NĂNG 2: HIỂN THỊ DANH SÁCH ======

function displayBooks() {
    if (library.length === 0) {
        alert("Thư viện hiện chưa có sách nào.");
        return;
    }

    let message = "=== DANH SÁCH SÁCH THƯ VIỆN ===\n";
    for (let i = 0; i < library.length; i++) {
        message += (i + 1) + ". [" + library[i].id + "] "
                 + library[i].title
                 + " - " + library[i].author
                 + " (" + library[i].year + ")\n";
    }
    alert(message);
}

// ====== CHỨC NĂNG 3: TÌM KIẾM THEO TÊN ======

function searchBook() {
    let keyword;
    do {
        keyword = prompt("Nhập từ khóa tìm kiếm:");
        if (keyword === null) return;
        keyword = keyword.trim();
        if (keyword === "") alert("Từ khóa không được để trống!");
    } while (keyword === "");

    let result = "=== KẾT QUẢ TÌM KIẾM ===\n";
    let found  = false;

    for (let i = 0; i < library.length; i++) {
        if (library[i].title.toLowerCase().includes(keyword.toLowerCase())) {
            result += "• [" + library[i].id + "] "
                    + library[i].title
                    + " - " + library[i].author + "\n";
            found = true;
        }
    }

    if (found) {
        alert(result);
    } else {
        alert('Không tìm thấy sách nào chứa từ khóa: "' + keyword + '"');
    }
}

// ====== CHỨC NĂNG 4: XÓA THEO ID ======

function deleteBook() {
    let idToDelete;
    do {
        idToDelete = prompt("Nhập ID sách cần xóa:");
        if (idToDelete === null) return;
        idToDelete = idToDelete.trim();
        if (idToDelete === "") alert("ID không được để trống!");
    } while (idToDelete === "");

    let foundIndex = -1;
    for (let i = 0; i < library.length; i++) {
        if (library[i].id.toLowerCase() === idToDelete.toLowerCase()) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        // FIXED: Thêm [0] để lấy phần tử đầu tiên của mảng trả về từ splice
        const deleted = library.splice(foundIndex, 1);
        alert('Đã xóa thành công sách: "' + deleted[0].title + '"');
    } else {
        alert('Không tìm thấy sách có ID: "' + idToDelete + '"');
    }
}

// ====== VÒNG LẶP CHÍNH ======

let choice = null;

do {
    choice = prompt(
        "--- QUẢN LÝ SÁCH ---\n" +
        "1. Thêm sách mới\n" +
        "2. Hiển thị danh sách sách\n" +
        "3. Tìm kiếm sách theo tên\n" +
        "4. Xóa sách theo ID\n" +
        "5. Thoát chương trình\n\n" +
        "Nhập lựa chọn của bạn:"
    );

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            displayBooks();
            break;
        case "3":
            searchBook();
            break;
        case "4":
            deleteBook();
            break;
        case "5":
        case null:
            alert("Cảm ơn bạn đã sử dụng chương trình quản lý thư viện!");
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
    }

} while (choice !== "5" && choice !== null);
