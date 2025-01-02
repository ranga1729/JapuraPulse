import express from 'express';
import testRoute from './routes/test.js';

const app = express();
const PORT = 3000;

app.use('/test', testRoute);

app.get('/', (req, res) => {
  res.send({
    "status": "api running"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});