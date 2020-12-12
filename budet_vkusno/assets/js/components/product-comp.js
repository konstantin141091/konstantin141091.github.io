Vue.component('product-comp', {

  data() {
    return {
      img: 'assets/img/products__index/product1.jpg',
      title: 'Вкусный торт',
      price: '3000',
      show_product_comp: this.$root.$refs.show_product,
    }
  },

  methods: {

    showProduct(img) {
      this.show_product_comp.show(img);
    }

  },

  mounted() {
    this.show_product_comp = this.$root.$refs.show_product;
  },

  template: `
                 <div class="product">
                            <div class="product__left">
                                <div class="product__mainImg" @click="showProduct(img)">
                                    <img :src="img" alt="product">
                                </div>
                                <div class="product__gallery">
                                    <i class="fas fa-chevron-left product__arrow"></i>
                                    <img class="product__img" :src="img" alt="product">
                                    <img class="product__img" :src="img" alt="product">
                                    <img class="product__img" :src="img" alt="product">

                                    <i class="fas fa-chevron-left product__arrow"></i>
                                </div>
                                <div class="product__offer">
                                    <p>
                                        Дизайн на фото указан для примера. Мы можем изменить его по вашему желанию в рамках нашей стилистики и добавить живые цветы.
                                    </p>
                                </div>
                            </div>
                            <div class="product__right">
                                <h1 class="product__title">{{ title }}</h1>
                                <div class="product__order">
                                    <div class="product__price">
                                        <p>от {{ price }}$</p>
                                    </div>
                                    <div class="product__instagram">
                                        <a href="https://instagram.com/budet_vkusno?igshid=x5xxgu616ts8" target="_blank">
                                            Заказать через Instagram
                                        </a>
                                    </div>
                                </div>
                                <div class="product__description">
                                    <p>
                                        Наша новая необычная ореховая начинка: влажный кедровый бисквит, кисленькие прослойки клюквенного конфи в сочетании с освежающим мятным муссом и воздушным сырно-творожным кремом с добавлением сливок и небольшого количества сахарной пудры.
                                    </p>
                                </div>
                                <div class="product__composition">
                                    <p>
                                        <span>Состав: </span>
                                        Отличный, всё натуральное)
                                    </p>
                                </div>
                                <div class="product__offer">
                                    <p>
                                        Сайт носит информативный характер. Заказа тортов и десертов идет через
                                        <span><a href="https://instagram.com/budet_vkusno?igshid=x5xxgu616ts8" target="_blank">Instagram</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
            `

});
