// sum -- возвращает сумму двух чисел
export const sum = (a, b) => a + b;

// multiply -- возвращает произведение двух чисел
export const multiply = (a, b) => a * b;

// divide -- возвращает результат деления a на b
// Если b = 0, выбрасывает ошибку
export const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Деление на ноль невозможно');
  }
  return a / b;
};

// isEven -- возвращает true, если число чётное, иначе false
export const isEven = (n) => n % 2 === 0;