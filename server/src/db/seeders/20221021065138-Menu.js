/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Menus', [
      {
        title: 'Свинина с картошкой',
        description: 'Сочная свинина с молодым картофелем под сыром',
        price: 456.20,
        category: 'Горячие блюда',
      },
      {
        title: 'Курица с овощами',
        description: 'Курица в соусе терияки с овощами',
        price: 300.22,
        category: 'Горячие блюда',
      },
      {
        title: 'Сибас с рисом',
        description: 'Рыба сибас 300г с рисом',
        price: 501.23,
        category: 'Горячие блюда',
      },
      {
        title: 'Борщ со сметаной',
        description: 'Борщ с хлебом и сметаной',
        price: 323.23,
        category: 'Супы',
      },
      {
        title: 'Грибной суп',
        description: 'Суп с лесными грибами',
        price: 433.45,
        category: 'Супы',
      },
      {
        title: 'Солянка',
        description: 'Солянка со всем, что было в холодильнике',
        price: 446.34,
        category: 'Супы',
      },
      {
        title: 'Водка "Белуга"',
        description: 'Водка',
        price: 350.00,
        category: 'Алкоголь',
      },
      {
        title: 'Пиво "Балтика"',
        description: 'Пиво Балтика',
        price: 199.99,
        category: 'Алкоголь',
      },
      {
        title: 'Сидр "Лось и кедр"',
        description: 'Сухой сидр',
        price: 280.32,
        category: 'Алкоголь',
      },
      {
        title: 'Рулетики с баклажанами',
        description: 'Рулетики с баклажанами и ореховой начинкой',
        price: 350.22,
        category: 'Закуски',
      },
      {
        title: 'Сельдь с картошкой',
        description: 'Селёдочка домашнего посола с отварным картофелем',
        price: 222.22,
        category: 'Закуски',
      },
      {
        title: 'Морковка по-корейски',
        description: 'В Корее даже не занют о таком',
        price: 150.23,
        category: 'Закуски',
      },
      {
        title: 'Салат Цезарь',
        description: 'Салат Цезарь с курицей/креветками',
        price: 499.99,
        category: 'Салаты',
      },
      {
        title: 'Салат Оливье',
        description: 'Домашний салат Оливье',
        price: 456.20,
        category: 'Салаты',
      },
      {
        title: 'Салат овощной',
        description: 'Огурцы,помидоры,лук',
        price: 99.99,
        category: 'Салаты',
      },
      {
        title: 'Вода "Байкал"',
        description: 'Газировка 0.3',
        price: 119.99,
        category: 'Б/А напитки',
      },
      {
        title: 'Апельсиновый сок',
        description: 'Свежевыжатый сок 0.3',
        price: 170,
        category: 'Б/А напитки',
      },
      {
        title: 'Молочный коктейль',
        description: 'Ванильный, шоколадный, клубничный 0.3',
        price: 180,
        category: 'Б/А напитки',
      },
      {
        title: 'Мороженое',
        description: 'Ванильное, шоколадное, клубничное',
        price: 150,
        category: 'Десерты',
      },
      {
        title: 'Штрудель яблочный',
        description: '200г',
        price: 190,
        category: 'Десерты',
      },
      {
        title: 'Торт "Наполеон"',
        description: '200г',
        price: 200,
        category: 'Десерты',
      },
      {
        title: 'Бургер "Джек Дэниелс"',
        description: '300г',
        price: 690,
        category: 'Бургеры',
      },
      {
        title: 'Бургер с мраморной говядиной',
        description: '300г',
        price: 790,
        category: 'Бургеры',
      },
      {
        title: 'Пепперони',
        description: '36 см',
        price: 550,
        category: 'Пицца',
      },
      {
        title: 'Гавайская',
        description: '36 см',
        price: 750,
        category: 'Пицца',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Menus', null, {});
  },
};
