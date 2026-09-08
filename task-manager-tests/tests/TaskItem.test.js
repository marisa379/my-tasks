import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../src/components/TaskItem';

describe('TaskItem Component', () => {
  
  test('Проверка рендеринга текста задачи', () => {
    // Подготавливаем тестовые данные
    const taskText = 'Тестовая задача';
    
    // Рендерим компонент с текстом задачи и пустой функцией-заглушкой
    render(<TaskItem task={taskText} onDelete={() => {}} />);
    
    // getByText -- находит элемент по текстовому содержимому
    const taskElement = screen.getByText(taskText);
    
    // toBeInTheDocument -- проверяет, что элемент присутствует в DOM
    expect(taskElement).toBeInTheDocument();
  });

  test('Проверка вызова функции onDelete при клике на кнопку удаления', () => {
    // jest.fn() -- создает mock-функцию для отслеживания вызовов
    const mockDelete = jest.fn();
    const taskText = 'Тестовая задача';
    
    // Рендерим компонент с mock-функцией
    render(<TaskItem task={taskText} onDelete={mockDelete} />);
    
    // getByRole -- находит кнопку по роли и тексту
    const deleteButton = screen.getByRole('button', { name: /удалить/i });
    
    // fireEvent.click -- симулирует клик пользователя
    fireEvent.click(deleteButton);
    
    // toHaveBeenCalledWith -- проверяет, что функция была вызвана с правильным аргументом
    expect(mockDelete).toHaveBeenCalledWith(taskText);
  });

});