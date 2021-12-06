export function greatePerson(name) {
    return `Hello ${name}`
}

export const name = "JS Program";

export function sum(a,b) {
    return a + b;
}

// khi import tên hàm bên file khác mà ko có tên trùng vs các function ở đây thì sẽ mặc định gọi hàm default này
// bao nhiêu export cũng dc thì duy nhất 1 hàm default thôi
export default function greet(name) {
    return `Hello ${name}`;
}