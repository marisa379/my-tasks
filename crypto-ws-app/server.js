const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`Сервер запущен на ws://localhost:${PORT}`);

const clients = new Set();

wss.on('connection', (ws) => {
  console.log('Новый клиент подключён');
  clients.add(ws);

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Клиент отключён');
  });

  ws.on('error', (err) => {
    console.error('Ошибка клиента:', err.message);
  });
});

const CRYPTO_PAIRS = [
  'btcusdt',
  'ethusdt',
  'bnbusdt',
  'solusdt',
  'xrpusdt',
  'adausdt',
  'dogeusdt',
  'avaxusdt'
];

const prices = {};

const binanceConnections = [];

CRYPTO_PAIRS.forEach((pair) => {
  const url = `wss://stream.binance.com:9443/ws/${pair}@trade`;
  const binanceWs = new WebSocket(url);

  binanceWs.on('open', () => {
    console.log(`Подключено к Binance: ${pair.toUpperCase()}`);
  });

  binanceWs.on('message', (data) => {
    try {
      const trade = JSON.parse(data);
      const price = trade.p ? parseFloat(trade.p).toFixed(2) : null;

      if (price) {
        prices[pair] = {
          symbol: pair.toUpperCase(),
          price: price,
          time: new Date().toLocaleTimeString()
        };

        const message = JSON.stringify({
          type: 'update',
          data: prices
        });

        clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(message);
          }
        });
      }
    } catch (error) {
      console.error(`Ошибка обработки ${pair}:`, error.message);
    }
  });

  binanceWs.on('error', (err) => {
    console.error(`Ошибка Binance (${pair}):`, err.message);
  });

  binanceWs.on('close', () => {
    console.warn(`Соединение с Binance (${pair}) разорвано`);
  });

  binanceConnections.push(binanceWs);
});

wss.on('connection', (ws) => {
  if (Object.keys(prices).length > 0) {
    const message = JSON.stringify({
      type: 'init',
      data: prices
    });
    ws.send(message);
  }
});

process.on('SIGINT', () => {
  console.log('Сервер остановлен');
  binanceConnections.forEach((ws) => ws.close());
  wss.close(() => {
    process.exit(0);
  });
});