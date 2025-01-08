const products = [
    {
        id: 1,
        title: 'Кроссовки Nike Air Max',
        price: '12000 руб.',
        description: 'Удобные кроссовки для повседневной носки.',
        image: '../assets/shoes1.jpg',
        specs: ['Материал верха: кожа', 'Подошва: резина', 'Цвет: черный'],
        availability: 10,
        category: 'Кроссовки'
    },
    {
        id: 2,
        title: 'Кроссовки Adidas Ultraboost',
        price: '14000 руб.',
        description: 'Кроссовки для бега с амортизирующей подошвой.',
        image: '../assets/shoes3.jpg',
        specs: ['Материал верха: текстиль', 'Подошва: boost', 'Цвет: серый'],
        availability: 7,
        category: 'Кроссовки'
    },
      {
        id: 3,
        title: 'Кроссовки Puma RS-X',
        price: '11000 руб.',
        description: 'Стильные кроссовки для активного отдыха.',
        image: '../assets/shoes4.jpg',
         specs: ['Материал верха: замша', 'Подошва: резина', 'Цвет: белый/черный'],
        availability: 8,
          category: 'Кроссовки'
    },
    {
        id: 4,
        title: 'Кроссовки New Balance 574',
        price: '10000 руб.',
        description: 'Классические кроссовки для повседневной жизни.',
        image: '../assets/shoes5.jpg',
        specs: ['Материал верха: замша/текстиль', 'Подошва: EVA', 'Цвет: синий'],
        availability: 12,
        category: 'Кроссовки'
    },
    {
        id: 5,
         title: 'Кроссовки Reebok Classic Leather',
        price: '9500 руб.',
        description: 'Ретро кроссовки из натуральной кожи.',
        image: '../assets/shoes15.jpg',
        specs: ['Материал верха: кожа', 'Подошва: резина', 'Цвет: белый'],
        availability: 9,
        category: 'Кроссовки'
    },
    {
        id: 6,
        title: 'Ботинки Timberland Classic',
        price: '15000 руб.',
        description: 'Теплые ботинки для зимы.',
        image: '../assets/shoes2.jpg',
        specs: ['Материал верха: нубук', 'Подкладка: мех', 'Цвет: коричневый'],
        availability: 5,
        category: 'Ботинки'
    },
      {
        id: 7,
         title: 'Ботинки Dr. Martens 1460',
        price: '16000 руб.',
         description: 'Культовые ботинки в стиле гранж.',
        image: '../assets/shoes6.jpg',
        specs: ['Материал верха: кожа', 'Подошва: air-cushion', 'Цвет: черный'],
        availability: 3,
        category: 'Ботинки'
    },
     {
        id: 8,
        title: 'Ботинки Caterpillar Colorado',
        price: '13000 руб.',
        description: 'Прочные и надежные ботинки для работы.',
        image: '../assets/shoes7.jpg',
        specs: ['Материал верха: нубук', 'Подошва: резина', 'Цвет: горчичный'],
        availability: 6,
        category: 'Ботинки'
    },
    {
        id: 9,
        title: 'Ботинки Salomon Quest',
        price: '17000 руб.',
        description: 'Трекинговые ботинки для походов.',
        image: '../assets/shoes8.jpg',
        specs: ['Материал верха: синтетика', 'Мембрана: Gore-Tex', 'Цвет: зеленый'],
        availability: 4,
        category: 'Ботинки'
    },
     {
        id: 10,
         title: 'Ботинки The North Face Chilkat',
         price: '14500 руб.',
         description: 'Зимние ботинки для экстремальных условий.',
         image: '../assets/shoes16.jpg',
         specs: ['Материал верха: кожа/текстиль', 'Подкладка: флис', 'Цвет: серый'],
         availability: 7,
         category: 'Ботинки'
    },
      {
        id: 11,
        title: 'Туфли Clarks Leather',
        price: '9000 руб.',
        description: 'Классические кожаные туфли для офиса.',
        image: '../assets/shoes9.jpg',
        specs: ['Материал верха: кожа', 'Подкладка: кожа', 'Цвет: черный'],
        availability: 15,
        category: 'Туфли'
    },
    {
        id: 12,
        title: 'Туфли  Heeled Pumps',
         price: '11000 руб.',
        description: 'Элегантные туфли на каблуке.',
        image: '../assets/shoes10.jpg',
        specs: ['Материал верха: замша', 'Каблук: 8 см', 'Цвет: бежевый'],
        availability: 9,
        category: 'Туфли'
    },
        {
        id: 13,
        title: 'Туфли  Loafers',
        price: '8000 руб.',
        description: 'Удобные повседневные лоферы.',
        image: '../assets/shoes11.jpg',
        specs: ['Материал верха: кожа', 'Подошва: резина', 'Цвет: бордовый'],
        availability: 11,
        category: 'Туфли'
    },
      {
        id: 14,
        title: 'Туфли  Ballet Flats',
        price: '7000 руб.',
        description: 'Легкие балетки для прогулок.',
        image: '../assets/shoes12.jpg',
        specs: ['Материал верха: текстиль', 'Подошва: резина', 'Цвет: розовый'],
        availability: 13,
          category: 'Туфли'
    },
     {
        id: 15,
        title: 'Туфли  Oxford Shoes',
        price: '12000 руб.',
         description: 'Классические оксфорды для формальных мероприятий.',
        image: '../assets/shoes13.jpg',
        specs: ['Материал верха: кожа', 'Подкладка: кожа', 'Цвет: коричневый'],
        availability: 7,
         category: 'Туфли'
    },
     {
        id: 16,
        title: 'Туфли Moccasins',
        price: '9500 руб.',
        description: 'Комфортные мокасины для отдыха.',
        image: '../assets/shoes14.jpg',
        specs: ['Материал верха: замша', 'Подошва: резина', 'Цвет: серый'],
        availability: 10,
          category: 'Туфли'
    }
];