// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
// let arr = [1, 2, 3, 4, 5,8,7,9];
// const newArr = arr.filter(number => number > 5);
// console.log(newArr);


// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
// let arr2 = [1, 2, 3, 4, 5];
// const sum =arr2.reduce((sum, item) => sum + item, 0);
// console.log(sum);


// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
// let arr3 = [1, 2, 3, 4, 5];
// const V = 4;
// resutl = arr3.includes(V) ? V: "Không tìm thấy"
// console.log(resutl);


// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
// const numbers = [1, 2, 3, 4, 5,6,7,-1];
//
// const allPositive = numbers.reduce((temp, number) => temp && number > 0, true);
//
// console.log(allPositive);


// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
// const numbers = [1,2,3,4,5,6,7];
// const numberMoreThree = numbers.filter(number => number > 3);
// const fistNumberMoreThree = numberMoreThree.length > 0 ? numberMoreThree[0] :undefined;
// console.log(fistNumberMoreThree);


// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
// const numbers = [1,2,3,4,5];
// const [fist,...rest]=numbers;
// console.log(fist);
// console.log(rest);


// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person"
// const person = [
//     {name: 'John', age: 25},
//     {name: 'John1', age: 32},
//     {name: 'John2', age: 33},
// ];
// for(const {name, age} of person) {
//     console.log(name);
//     console.log(age);
// }

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
// function sum(...numbers) {
//     return numbers.reduce((sum, number) => sum + number, 0);
//     console.log(sum(1, 2, 3, 4));
//     const arr = [5, 10, 15];
//     console.log(sum(...arr));
// }
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
// function welcomeMessage(...names) {
//     return `Welcome, ${names.join(', ')}!`;
// }
//
// console.log(welcomeMessage('Alice', 'Bob', 'Charlie'));

// 10. Tạo một đối tượng "book" với thuộc tính "
const title = "To Kill a Mockingbird";
const author = "Harper Lee";
const pages = 281;

const book = {
    title,
    author,
    pages,
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
};

book.displayInfo();

