import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';

describe('TaskList Component', () => {
  
  test('Проверка рендеринга списка задач', () => {
    // Подготавливаем массив тестовых задач
    const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];
    
    // Рендерим компонент с задачами и пустой функцией-заглушкой
    render(<TaskList tasks={tasks} onDeleteTask={() => {}} />);
    
    // Проверяем, что все задачи отображаются
    tasks.forEach(task => {
      // getByText -- находит каждый элемент по тексту
      const taskElement = screen.getByText(task);
      // toBeInTheDocument -- проверяет наличие каждого элемента в DOM
      expect(taskElement).toBeInTheDocument();
    });
    
    // getAllByRole -- находит все элементы списка
    const listItems = screen.getAllByRole('listitem');
    // toHaveLength -- проверяет, что длина массива равна ожидаемой
    expect(listItems).toHaveLength(tasks.length);
  });

});