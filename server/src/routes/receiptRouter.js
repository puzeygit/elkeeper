const express = require('express');
const { Receipt } = require('../db/models');

const router = express.Router();

router.post('/new', async (req, res) => {
  const newReceipt = await Receipt.create(
    { tableId: req.body.itemInfo, userId: req.session.user.id },
  );
  res.json(newReceipt);
});

router.route('/:id')
  .get(async (req, res) => {
    const receipt = await Receipt.findOne({ where: { id: req.params.id } });
    res.json(receipt);
  })
  .post(async (req, res) => {
    console.log('req.body ======= ', req.body.total);
    console.log('id ======= ', req.params.id);
    const updatedReceipt = await Receipt.update(
      { total: req.body.total },
      { where: { tableId: req.params.id } },
    );
    res.json(updatedReceipt);
  });

module.exports = router;
