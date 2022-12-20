const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    name, surname, login, password, role,
  } = req.body;
  if (name && surname && login && password && role) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { login },
        defaults: {
          name, surname, role, password: await bcrypt.hash(password, 10),
        },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      } if (user) {
        throw ({ loginErr: 'Уже существует' });
      }
    } catch (e) {
      if (e.loginErr) {
        return res.status(401).json({ loginErr: e.loginErr });
      }
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  if (login && password) {
    try {
      const user = await User.findOne({
        where: { login },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.get('/all', async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

router.post('/delete', async (req, res) => {
  const id = req.body;
  for (let i = 0; i < id.length; i += 1) {
    await User.destroy({ where: { id: id[i] } });
  }
  return res.sendStatus(200);
});

module.exports = router;
