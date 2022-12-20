const express = require('express');
const nodemailer = require('nodemailer');
const Template = require('../email/Template.js');
const { Table } = require('../db/models');

const router = express.Router();
require('dotenv').config();

router.route('/sendreceipt')
  .post(async (req, res) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASS,
      },
    });
    const { data } = req.body;
    const table = await Table.findByPk(data.table);
    data.table = table.title;
    if (data) {
      const mail = Template(data.user, data.guests, data.table, data.total);
      const mailOptions = {
        from: ' "El-Keeper ☕ 🥃 🍭" <elbruselkeeper@gmail.com>',
        to: 'puzey@inbox.ru',
        subject: 'El-Keeper Recepit 🎟',
        html: mail,
      };
      transporter.sendMail(mailOptions);
      return res.json('All right');
    }
    return res.sendStatus(401);
  });

module.exports = router;
