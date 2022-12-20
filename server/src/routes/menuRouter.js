const express = require('express');
const { Menu } = require('../db/models');
const { deleteProtect } = require('../middlewares/index');

const router = express.Router();

router.post('/menuitem', async (req, res) => {
  const menuItem = req.body;
  const newMenuItem = await Menu.create({
    title: menuItem.title,
    description: menuItem.description,
    price: parseFloat(menuItem.price),
    category: menuItem.category,
  });
  res.json(newMenuItem);
});

router.get('/menulist', async (req, res) => {
  const menuList = await Menu.findAll({
    order: [
      ['id', 'ASC']],
  });
  res.json(menuList);
});

router.get('/categorieslist', async (req, res) => {
  const allCategories = await Menu.findAll({ attributes: ['category'] });
  const categoriesList = JSON.parse(JSON.stringify(allCategories));
  const categoryArray = [];
  const array = [];
  categoriesList.map((catItem, index) => {
    if (!array.includes(catItem.category)) {
      array.push(catItem.category);
      categoryArray.push({ id: index, title: catItem.category });
    }
  });
  res.json(categoryArray);
});

router.post('/categorieslist/:category', async (req, res) => {
  const filteredMenuList = await Menu.findAll({ where: { category: req.params.category } });
  res.json(filteredMenuList);
});

router.route('/menuitem/:id')
  .patch(async (req, res) => {
    const menuItem = await Menu.findByPk(req.params.id);
    menuItem.status = !menuItem.status;
    await menuItem.save();
    const menu = await Menu.findAll({
      order: [
        ['id', 'ASC']],
    });
    res.json(menu);
  })
  .delete(deleteProtect, async (req, res) => {
    await Menu.destroy({ where: { id: req.params.id } });
    const updatedMenu = await Menu.findAll();
    res.json(updatedMenu);
  });

module.exports = router;
