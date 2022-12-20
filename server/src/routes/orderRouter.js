const express = require('express');
const { Order, Receipt, Menu } = require('../db/models');
const { deleteProtect } = require('../middlewares/index');

const router = express.Router();

router.post('/new', async (req, res) => {
  const receipt = await Receipt.findAll({ limit: 1, order: [['id', 'DESC']] });
  const jsonReceipt = JSON.parse(JSON.stringify(receipt));
  try {
    const [order, created] = await Order.findOrCreate({
      where: {
        position: req.body.position,
        receiptId: jsonReceipt[0].id,
        userId: req.session.user.id,
      },
      defaults: {
        position: req.body.position,
        receiptId: jsonReceipt[0].id,
        userId: req.session.user.id,
      },
    });
    let currentQuantity = { quantity: 0 };
    if (created) {
      return res.sendStatus(200);
    }
    currentQuantity = order;

    await Order.update({ quantity: Number(currentQuantity.quantity) + 1 }, {
      where: {
        position: req.body.position,
        receiptId: jsonReceipt[0].id,
        userId: req.session.user.id,
      },
    });
    return res.sendStatus(200);
  } catch (err) { console.log(err); }
});

router.post('/orderlist', async (req, res) => {
  const filteredList = [];
  const { receiptId } = req.body;
  let index = 1;
  try {
    const orderList = await Order.findAll(
      { include: [{ model: Menu }] },
    );
    orderList.map((orderItem) => {
      if (orderItem.receiptId === receiptId) {
        filteredList.push({
          id: orderItem.id,
          localIndex: index,
          title: orderItem.Menu.title,
          quantity: orderItem.quantity,
          price: (Number(orderItem.Menu.price) * Number(orderItem.quantity)),
        });
        index += 1;
      }
    });
    res.json(filteredList);
  } catch (err) { res.send(err); }
});

router.route('/:id')
  .post(async (req, res) => {
    await Order.update(req.body, { where: { id: req.params.id } });
    const updatedOrder = await Order.findAll();
    res.json(updatedOrder);
  })
  .delete(deleteProtect, async (req, res) => {
    const orderIdToDelete = req.params.id;
    await Order.destroy({ where: { id: orderIdToDelete } });
    res.json(orderIdToDelete);
  });

router.route('/top5')
  .get(async (req, res) => {
    const rowData = await Order.findAll({
      include: [
        { model: Menu, required: true },
      ],
      limit: 5,
      order: [['quantity', 'DESC']],
    });
    // console.log('rowData ===>', JSON.parse(JSON.stringify(rowData)));
    const data = rowData.map((item) => ({
      status: item.Menu.title,
      value: item.quantity,
    }));
    const unique = [];
    outer:
    for (const item of data) {
      console.log(item.status);
      for (const val of unique) {
        // console.log(val);
        if (val?.status === item.status) {
          val.value += item.value;
          continue outer;
        }
      }
      unique.push(item);
    }
    res.json(unique);
  });

module.exports = router;
