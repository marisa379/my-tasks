import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskInput from '../src/components/TaskInput';

describe('TaskInput Component', () => {
  
  test('Проверка рендеринга input и кнопки', () => {
    // Рендерим компонент с пустой функцией-заглушкой
    render(<TaskInput onAddTask={() => {}} />);
    
    // getByPlaceholderText -- находит элемент по тексту-подсказке
    const input = screen.getByPlaceholderText(/введите задачу/i);
    // getByRole -- находит элемент по его роли (button) и тексту
    const button = screen.getByRole('button', { name: /добавить/i });
    
    // toBeInTheDocument -- проверяет, что элемент присутствует в DOM
    expect(input).toBeInTheDocument();
    // toBeInTheDocument -- проверяет, что кнопка присутствует в DOM
    expect(button).toBeInTheDocument();
  });

  test('Проверка изменения значения input при вводе текста', () => {
    // Рендерим компонент
    render(<TaskInput onAddTask={() => {}} />);
    
    // Находим поле ввода
    const input = screen.getByPlaceholderText(/введите задачу/i);
    
    // fireEvent.change -- симулирует событие изменения значения
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    
    // toHaveValue -- проверяет, что значение элемента равно ожидаемому
    expect(input).toHaveValue('Новая задача');
  });

  test('Проверка вызова функции onAddTask при клике на кнопку', async () => {
    // jest.fn() -- создает mock-функцию для отслеживания вызовов
    const mockAddTask = jest.fn();
    
    // Рендерим компонент с mock-функцией
    render(<TaskInput onAddTask={mockAddTask} />);
    
    // Находим элементы
    const input = screen.getByPlaceholderText(/введите задачу/i);
    const button = screen.getByRole('button', { name: /добавить/i });
    
    // userEvent.type -- симулирует ввод текста пользователем
    await userEvent.type(input, 'Новая задача');
    
    // userEvent.click -- симулирует клик пользователя
    await userEvent.click(button);
    
    // toHaveBeenCalledWith -- проверяет, что функция была вызвана с определенными аргументами
    expect(mockAddTask).toHaveBeenCalledWith('Новая задача');
    
    // toHaveValue -- проверяет, что поле очистилось после отправки
    expect(input).toHaveValue('');
  });

});