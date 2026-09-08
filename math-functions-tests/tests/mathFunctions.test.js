import { sum, multiply, divide, isEven } from '../src/mathFunctions';

describe('Тестирование математических функций', () => {
  
  describe('Функция sum', () => {
    
    test('sum: возвращает корректную сумму двух чисел', () => {
      // toBe -- проверяет строгое равенство значений
      expect(sum(2, 3)).toBe(5);
      // toBe -- проверяет строгое равенство значений
      expect(sum(10, 15)).toBe(25);
    });
    
    test('sum: корректно работает с отрицательными числами', () => {
      // toBe -- проверяет строгое равенство значений
      expect(sum(-5, 3)).toBe(-2);
      // toBe -- проверяет строгое равенство значений
      expect(sum(-10, -5)).toBe(-15);
      // toBe -- проверяет строгое равенство значений
      expect(sum(0, -7)).toBe(-7);
    });
    
  });
  
  describe('Функция multiply', () => {
    
    test('multiply: возвращает корректное произведение', () => {
      // toBe -- проверяет строгое равенство значений
      expect(multiply(4, 5)).toBe(20);
      // toBe -- проверяет строгое равенство значений
      expect(multiply(7, 8)).toBe(56);
      // toBe -- проверяет строгое равенство значений
      expect(multiply(-3, 4)).toBe(-12);
    });
    
    test('multiply: возвращает 0 при умножении на 0', () => {
      // toBeCloseTo -- проверяет приблизительное равенство чисел (игнорирует -0)
      expect(multiply(10, 0)).toBeCloseTo(0);
      // toBeCloseTo -- проверяет приблизительное равенство чисел
      expect(multiply(0, 5)).toBeCloseTo(0);
      // toBeCloseTo -- проверяет приблизительное равенство чисел
      expect(multiply(-3, 0)).toBeCloseTo(0);
    });
    
  });
  
  describe('Функция divide', () => {
    
    test('divide: возвращает корректный результат деления', () => {
      // toBe -- проверяет строгое равенство значений
      expect(divide(10, 2)).toBe(5);
      // toBeCloseTo -- проверяет приблизительное равенство для чисел с плавающей точкой
      expect(divide(7, 2)).toBeCloseTo(3.5);
      // toBe -- проверяет строгое равенство значений
      expect(divide(-10, 2)).toBe(-5);
    });
    
    test('divide: выбрасывает ошибку при делении на 0', () => {
      // toThrow -- проверяет, что функция выбрасывает ошибку с указанным сообщением
      expect(() => divide(10, 0)).toThrow('Деление на ноль невозможно');
      // toThrow -- проверяет, что функция выбрасывает ошибку (без проверки сообщения)
      expect(() => divide(-5, 0)).toThrow();
      // toThrow -- проверяет, что функция выбрасывает ошибку с сообщением, содержащим слово "ноль"
      expect(() => divide(0, 0)).toThrow(/ноль/);
    });
    
  });
  
  describe('Функция isEven', () => {
    
    test('isEven: возвращает true для чётных чисел', () => {
      // toBeTruthy -- проверяет, что значение является истинным (true)
      expect(isEven(2)).toBeTruthy();
      // toBeTruthy -- проверяет, что значение является истинным
      expect(isEven(100)).toBeTruthy();
      // toBeTruthy -- проверяет, что значение является истинным
      expect(isEven(0)).toBeTruthy();
      // toBeTruthy -- проверяет, что значение является истинным
      expect(isEven(-4)).toBeTruthy();
    });
    
    test('isEven: возвращает false для нечётных чисел', () => {
      // toBeFalsy -- проверяет, что значение является ложным (false)
      expect(isEven(3)).toBeFalsy();
      // toBeFalsy -- проверяет, что значение является ложным
      expect(isEven(101)).toBeFalsy();
      // toBeFalsy -- проверяет, что значение является ложным
      expect(isEven(-5)).toBeFalsy();
    });
    
  });
  
});