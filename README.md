# -Backend-
Практическое задание по дисциплине «Основы Backend»
# Todo App (React + Express)

Клиент-серверное приложение для управления списком задач с защитой API по ключу.

## Стек

- **Frontend:** React + Vite
- **Backend:** Express.js + dotenv + cors

## Структура

```
todo-frontend/   # React-клиент
todo-backend/    # Express-сервер
практическая работа # отчёт по данной работе
```

## Установка и запуск

### Backend

```bash
cd todo-backend
npm install
npm start
```

Сервер запустится на `http://localhost:5000`.

### Frontend

```bash
cd todo-frontend
npm install
npm run dev
```

Клиент запустится на `http://localhost:5173`.

## API

Все запросы требуют заголовок `x-api-key`.
```
PORT=5000
API_KEY=my-secret-api-key-12345
```
