const express = require('express');
const { Table } = require('../db/models');
const { deleteProtect } = require('../middlewares/index');

const router = express.Router();

router.post('/', async (req, res) => {
  const newTable = await Table.create({ title: `Стол ${req.body.data}` });
  res.json(newTable);
});

router.get('/tablelist', async (req, res) => {
  const tableList = await Table.findAll({ order: [['createdAt', 'ASC']] });
  res.json(tableList);
});

router.route('/:id')
  .post(async (req, res) => {
    await Table.update({ status: req.body.status }, { where: { id: req.params.id } });
    const updatedTableList = await Table.findAll({ order: [['createdAt', 'ASC']] });
    res.json(updatedTableList);
  })
  .delete(deleteProtect, async (req, res) => {
    await Table.destroy({ where: { id: req.params.id } });
    const updatedTableList = await Table.findAll({ order: [['createdAt', 'ASC']] });
    res.json(updatedTableList);
  });

module.exports = router;
