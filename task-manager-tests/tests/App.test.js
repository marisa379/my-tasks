import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../src/components/App';

describe('App Component', () => {
  
  test('Проверка добавления новой задачи и её отображения в списке', async () => {
    // Рендерим приложение
    render(<App />);
    
    // Находим поле ввода и кнопку добавления
    const input = screen.getByPlaceholderText(/введите задачу/i);
    const addButton = screen.getByRole('button', { name: /добавить/i });
    
    // userEvent.type -- симулирует ввод текста
    await userEvent.type(input, 'Новая задача');
    
    // userEvent.click -- симулирует клик по кнопке
    await userEvent.click(addButton);
    
    // getByText -- находит добавленную задачу
    const taskElement = screen.getByText('Новая задача');
    // toBeInTheDocument -- проверяет, что задача появилась в DOM
    expect(taskElement).toBeInTheDocument();
  });

  test('Проверка удаления записи при клике на кнопку удаления', async () => {
    // Рендерим приложение
    render(<App />);
    
    // Добавляем задачу
    const input = screen.getByPlaceholderText(/введите задачу/i);
    const addButton = screen.getByRole('button', { name: /добавить/i });
    
    await userEvent.type(input, 'Задача для удаления');
    await userEvent.click(addButton);
    
    // Проверяем, что задача появилась
    const taskElement = screen.getByText('Задача для удаления');
    // toBeInTheDocument -- проверяет наличие задачи
    expect(taskElement).toBeInTheDocument();
    
    // Находим кнопку удаления
    const deleteButton = screen.getByRole('button', { name: /удалить/i });
    
    // Удаляем задачу
    await userEvent.click(deleteButton);
    
    // queryByText -- ищет элемент, но не выбрасывает ошибку если не найден
    // not.toBeInTheDocument -- проверяет, что элемент отсутствует в DOM
    expect(screen.queryByText('Задача для удаления')).not.toBeInTheDocument();
  });

});