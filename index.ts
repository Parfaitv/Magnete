import { StoreState } from "./src/types";

/**
 export const initialState: StoreState = {
  startPage: { Отображение главной картинки. Путь "/"
    newCollection: {  отображение картинок для новой коллекции
      header: {
        title: string; заголовок для картинки 
        navPath: string; путь по которому перейдет пользовать при нажатии
      };
      items: {
        img: string;  ссылка на картинку
        name?: string;  название снизу, если необходимо
        price?: string; цена если нужно указать
        navPath: string; путь по которому пользователь перейдет, если нажем на картинку
      }[];
    }
    womanCatalog: {  отображение картинок для женской коллекции. ровно 5 шт.
      header: {
        title: string; заголовок для картинки 
        navPath: string; путь по которому перейдет пользовать при нажатии
      };
      items: {
        img: string;  ссылка на картинку
        name?: string;  название снизу, если необходимо
        price?: string; цена если нужно указать
        navPath: string; путь по которому пользователь перейдет, если нажем на картинку
      }[];
    };
    manCatalog: {  отображение картинок для мужской коллекции
      header: {
        title: string; заголовок для картинки 
        navPath: string; путь по которому перейдет пользовать при нажатии
      };
      items: {
        img: string;  ссылка на картинку
        name?: string;  название снизу, если необходимо
        price?: string; цена если нужно указать
        navPath: string; путь по которому пользователь перейдет, если нажем на картинку
      }[];
    };
  };
  catalogPage: { страницы каталога. Путь "/catalog"
    title: string; Заголовок определенного каталога. Например "Мужская коллекция"
    navPath: string; Путь по которому перейдет пользователь при клике на заголовок
    items: {
      img: string; ссылка на картинку
      navPath: string; путь по которому перейдет пользователь при клике на картинку
    }[];
  }[];
  catalogVariantPage: { страница определенного каталога. Путь "/catalog/:variant"
    man: { мужской каталог. Путь "catalog/man"
      title: string; название каталога. Например "Мужская коллекция"
      items: { список видов мужской коллекции.  Например "База", "Спорт", "Классика"
        img: string; ссылка на картинку
        navPath: string; путь по которому перейдет пользователь при нажатии на картинку
      }[];
    };
    woman: { женский каталог. Путь "catalog/woman"
      title: string; название каталога. Например "Женская коллекция"
      items: { список видов женской коллекции. Например "База", "Спорт", "Black Magnete"
        img: string; ссылка на картинку
        navPath: string; путь по которому перейдет пользователь при нажатии на картинку
      }[];
    };
    newCollection: { каталог Новой коллекции. Путь "catalog/newCollection"
      title: string; название каталога. Например "Новая коллекция"
      items: { список товаров новой коллекции. Например "Товар 1", "Товар 2", "Товар 3"
        img: string; ссылка на картинку
        navPath: string; путь по которому перейдет пользователь при нажатии на картинку. Путь "catalog/newCollection/:id"
      }[];
    };
  };
  catalogViewPage: { Страница определенного вида каталога. Путь "catalog/:variant/:view", например "catalog/man/base"
    man: {
      base: { Путь "catalog/man/base"
        title: string; название вида. Например "База"
        items: { Список товаров определнного вида
          img: string; ссылка на картинку 
          navPath: string; путь по которому перейдет пользователь при клике на картинку. Например "catalog/man/base/1"
        }[];
      };
      clasic: {  по аналогии с base
        title: string;
        items: {
          img: string;
          navPath: string;
        }[];
      };
      sport: {  по аналогии с base
        title: string;
        items: {
          img: string;
          navPath: string;
        }[];
      };
    };
    woman: {
    base: { Путь "catalog/woman/base"
      title: string; название вида. Например "База"
      items: { Список товаров определнного вида
        img: string; ссылка на картинку 
        navPath: string; путь по которому перейдет пользователь при клике на картинку. Например "catalog/woman/base/1"
      }[];
    };
    clasic: {  по аналогии с base
      title: string;
      items: {
        img: string;
        navPath: string;
      }[];
    };
    sport: {  по аналогии с base
      title: string;
      items: {
        img: string;
        navPath: string;
      }[];
    };
    knitted: {  по аналогии с base
        title: string;
        items: {
          img: string;
          navPath: string;
        }[];
      };
    blackMagnete: {  по аналогии с base
        title: string;
        items: {
          img: string;
          navPath: string;
        }[];
      };
    };
  };
  deliveryPage: {
    title: string; Заголовок страницы доставки
    description: string; Описание под заголовком
    advertisingBlock: string[]; ссылки на картинки (3 шт)
  };
  aboutPage: {
    title: string; Заголовок страницы о бренде
    description: string; Описание под заголовком
    advertisingBlock: string[]; ссылки на картинки (3 шт)
  };
  contactsPage: {
    title: string; Заголовок страницы контактов
    description: string; Описание под заголовком
    advertisingBlock: string[]; ссылки на картинки (3 шт)
  };
  servicesPage: {
    title: string; Заголовок страницы Услуг стилиста
    description: string; Описание под заголовком
    advertisingBlock: string[]; ссылки на картинки (3 шт)
  };
  productPage: {
    man: {
      base: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      clasic: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      sport: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
    }
    woman: {
      base: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      clasic: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      sport: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      blackMagnete: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
      knitted: {
        id: string; Уникальный номер товара
        images: string[]; Ссылки на картинки товаров
        name: string; Название товаров
        description: string; Описание товара
        consist: string; Состав товара
        article: string; Артикул товара
        sizes: string[]; Список размеров товара
        price: number; Цена товара
      }[];
    }
  };
  burgerMenu: { Список для бургер меню
    navPath: string; Путь по которому перейдет пользователь при клике
    text: string; Отображаемый текст для пользователя
    children?: MenuItem[]; Точно такой же список дочерних списков. Например:
    [
      {
        navPath: '/catalog',
        text: 'Каталог',
        children: [
          {
            navPath: '/catalog/man',
            text: 'Мужская коллекция',
          }
        ]  
      }
    ]
  };
};
 */

export const initialState: StoreState = {
  startPage: {
    mainPage:
      "https://storage.yandexcloud.net/test-magnete-parfaitv/mainPage.png",
    newCollection: {
      header: { title: "Новая коллекция", navPath: "/catalog/newCollection" },
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 1",
          price: "3999",
          navPath: "/catalog/newCollection/1",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 2",
          price: "3999",
          navPath: "/catalog/newCollection/2",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 3",
          price: "3999",
          navPath: "/catalog/newCollection/3",
        },
      ],
    },
    womanCatalog: {
      header: { title: "Каталог/Женская одежда", navPath: "/catalog/woman" },
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/clasic",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/sport",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/knitted",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/blackMagnete",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/base",
        },
      ],
    },
    manCatalog: {
      header: { title: "Мужская коллекция", navPath: "/catalog/man" },
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 1",
          price: "3999",
          navPath: "/catalog/man/clasic/1",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 2",
          price: "3999",
          navPath: "/catalog/man/clasic/2",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          name: "Название 3",
          price: "3999",
          navPath: "/catalog/man/clasic/3",
        },
      ],
    },
  },
  catalogPage: [
    {
      title: "Мужская коллекция",
      navPath: "/catalog/man",
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/clasic",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/base",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/sport",
        },
      ],
    },
    {
      title: "Женская коллекция",
      navPath: "/catalog/woman",
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/clasic",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/base",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/blackMagnete",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/knitted",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/sport",
        },
      ],
    },
    {
      title: "Новая коллекция",
      navPath: "/catalog/newCollection",
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/newCollection/1",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/newCollection/2",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/newCollection/3",
        },
      ],
    },
  ],
  catalogVariantPage: {
    man: {
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/clasic",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/base",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/man/sport",
        },
      ],
      title: "Мужская коллекция",
    },
    woman: {
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/clasic",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/base",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/sport",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/knitted",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/woman/blackMagnete",
        },
      ],
      title: "Женская коллекция",
    },
    newCollection: {
      items: [
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/newCollection/1",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/newCollection/2",
        },
        {
          img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          navPath: "/catalog/newCollection/3",
        },
      ],
      title: "Новая коллекция",
    },
  },
  catalogViewPage: {
    man: {
      clasic: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/clasic/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/clasic/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/clasic/3",
          },
        ],
        title: "Классика",
      },
      base: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/base/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/base/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/base/3",
          },
        ],
        title: "База",
      },
      sport: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/sport/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/sport/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/man/sport/3",
          },
        ],
        title: "Спорт",
      },
    },
    woman: {
      clasic: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/clasic/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/clasic/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/clasic/3",
          },
        ],
        title: "Классика",
      },
      base: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/base/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/base/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/base/3",
          },
        ],
        title: "База",
      },
      sport: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/sport/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/sport/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/sport/3",
          },
        ],
        title: "Спорт",
      },
      knitted: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/knitted/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/knitted/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/knitted/3",
          },
        ],
        title: "Трикотаж",
      },
      blackMagnete: {
        items: [
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/blackMagnete/1",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/blackMagnete/2",
          },
          {
            img: "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            navPath: "/catalog/woman/blackMagnete/3",
          },
        ],
        title: "Black Magnete",
      },
    },
  },
  deliveryPage: {
    advertisingBlock: [
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
    ],
    description:
      "Инструкция, Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция Инструкция",
    title: "Доставка и оплата",
  },
  aboutPage: {
    advertisingBlock: [
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
    ],
    description:
      "Описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда, описание бренда",
    title: "О бренде",
  },
  contactsPage: {
    advertisingBlock: [
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
    ],
    description: "Контакты, контакты, контакты, контакты",
    title: "Контакты",
  },
  servicesPage: {
    advertisingBlock: [
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
      "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
    ],
    description: "Услуги стилиста, Услуги стилиста, Услуги стилиста",
    title: "Услуги стилиста",
  },
  productPage: {
    man: {
      base: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      clasic: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      sport: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
    },
    woman: {
      base: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      clasic: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      sport: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      blackMagnete: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
      knitted: [
        {
          id: "1",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 1",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 6000,
        },
        {
          id: "2",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 2",
          description:
            "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 7000,
        },
        {
          id: "3",
          images: [
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
            "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          ],
          name: "Название 3",
          description:
            "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
          consist:
            "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
          sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
          article: "Артикул товара: xxxxxxxx",
          price: 8000,
        },
      ],
    },
    newCollection: [
      {
        id: "1",
        images: [
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
        ],
        name: "Название 1",
        description:
          "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
        consist:
          "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
        sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
        article: "Артикул товара: xxxxxxxx",
        price: 6000,
      },
      {
        id: "2",
        images: [
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
        ],
        name: "Название 2",
        description:
          "Описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара, описание товара.",
        consist:
          "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
        sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
        article: "Артикул товара: xxxxxxxx",
        price: 7000,
      },
      {
        id: "3",
        images: [
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
          "https://cache-limeshop.cdnvideo.ru/limeshop/aa/79069681741d47ff5c1bc48bf9cb6fd81f61d61e5.jpg?q=85&w=0",
        ],
        name: "Название 3",
        description:
          "description, description, description, description, description, description, description, description, description, description, description, description, description, description, description, description.",
        consist:
          "consist, consist, consist, consist, consist, consist, consist, consist, consist, consist, consist.",
        sizes: ["XXS", "XS", "S", "M", "L", "Xl", "XXL", "XXXL"],
        article: "Артикул товара: xxxxxxxx",
        price: 8000,
      },
    ],
  },
  burgerMenu: [
    {
      navPath: "/catalog",
      text: "Каталог",
      children: [
        {
          navPath: "/catalog/woman",
          text: "Женская одежда",
          children: [
            { navPath: "/catalog/woman/base", text: "База" },
            { navPath: "/catalog/woman/clasic", text: "Классика" },
            { navPath: "/catalog/woman/sport", text: "Спорт" },
            { navPath: "/catalog/woman/knitted", text: "Трикотаж" },
            { navPath: "/catalog/woman/blackMagnete", text: "Black Magnete" },
          ],
        },
        {
          navPath: "/catalog/man",
          text: "Мужская одежда",
          children: [
            { navPath: "/catalog/man/base", text: "База" },
            { navPath: "/catalog/man/clasic", text: "Классика" },
            { navPath: "/catalog/man/sport", text: "Спорт" },
          ],
        },
        { navPath: "/catalog/newCollection", text: "Новая коллекция" },
      ],
    },
    { navPath: "/about", text: "О бренде" },
    { navPath: "/delivery", text: "Доставка" },
    { navPath: "/services", text: "Услуги стилиста" },
    { navPath: "/contacts", text: "Контакты" },
  ],
};
