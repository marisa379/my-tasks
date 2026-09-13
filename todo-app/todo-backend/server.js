// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory хранилище задач
let tasks = [
  { id: 1, title: 'Изучить Express.js', completed: false },
  { id: 2, title: 'Сделать практическое задание', completed: false },
];
let nextId = 3;

// Middleware проверки API-ключа
function checkApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API-ключ отсутствует в заголовках запроса' });
  }

  if (apiKey !== API_KEY) {
    return res.status(403).json({ error: 'Неверный API-ключ' });
  }

  next();
}

// Применяем проверку ко всем маршрутам /api
app.use('/api', checkApiKey);

// GET /api/tasks — получение всех задач
app.get('/api/tasks', (req, res) => {
  try {
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении задач' });
  }
});

// POST /api/tasks — добавление новой задачи
app.post('/api/tasks', (req, res) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'Поле title обязательно и должно быть строкой' });
    }

    const newTask = {
      id: nextId++,
      title: title.trim(),
      completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при добавлении задачи' });
  }
});

// DELETE /api/tasks/:id — удаление задачи по ID
app.delete('/api/tasks/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Задача не найдена' });
    }

    const deletedTask = tasks.splice(index, 1)[0];
    res.status(200).json({ message: 'Задача удалена', task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении задачи' });
  }
});

// PUT /api/tasks/:id — обновление задачи по ID
app.put('/api/tasks/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({ error: 'Задача не найдена' });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'title должен быть непустой строкой' });
      }
      task.title = title.trim();
    }

    if (completed !== undefined) {
      if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'completed должен быть boolean' });
      }
      task.completed = completed;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обновлении задачи' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
  console.log(`API-ключ: ${API_KEY}`);
});