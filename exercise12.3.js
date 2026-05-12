let numbers = 20; // Số lượng số nguyên tố cần tìm
let count = 0;   // Biến đếm xem đã tìm được bao nhiêu số rồi
let N = 2;       // Số bắt đầu kiểm tra xem có phải số nguyên tố không

console.log("20 số nguyên tố đầu tiên là:");

while (count < numbers) {
    let isPrime = true;

    // Kiểm tra N có phải số nguyên tố không
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false; // Nếu chia hết cho số nào đó thì không phải số nguyên tố
            break;
        }
    }

    // Nếu là số nguyên tố thì in ra và tăng biến đếm
    if (isPrime) {
        console.log(N);
        count++;
    }

    N++; // Kiểm tra số tiếp theo
}
