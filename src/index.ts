import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';

const app = express();

app.use(bodyParser.json());

const port = 3000;

// user related start
app.use('/users',
(req, res, next) => {
  console.log('get request for users...');
  next();
},
userRoutes);
// user related end

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}`));