import express from 'express';
import testRoute from './routes/test.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});

app.use('/test', testRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});