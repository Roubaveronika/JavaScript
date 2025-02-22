// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(data1) {
    if (data1 % 2 === 0)
        return true;
    else
        return false;
}
console.log(isEven(4));
console.log(isEven(5))
