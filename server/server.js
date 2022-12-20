const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userRouter = require('./src/routes/userRouter');
const menuRouter = require('./src/routes/menuRouter');
const orderRouter = require('./src/routes/orderRouter');
const receiptRouter = require('./src/routes/receiptRouter');
const tableRouter = require('./src/routes/tableRouter');
const mailRouter = require('./src/routes/mailRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/api/user', userRouter);
app.use('/api/menu', menuRouter);
app.use('/api/order', orderRouter);
app.use('/api/receipt', receiptRouter);
app.use('/api/table', tableRouter);
app.use('/api/mail', mailRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
