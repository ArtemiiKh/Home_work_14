const number = +prompt("Введите Ваше число");
const degree = +prompt("Укажите степень возвидения числа");

function multiplication (num, deg = 1) {
	if (!num || !deg) {
		return "some error";
	} else {
		return Math.pow(num, deg);
	}
}
const result = multiplication(number, degree);
alert(result);