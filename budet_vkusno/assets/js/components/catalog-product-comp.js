Vue.component('catalog-product-comp', {

  data() {
    return {
      img: 'assets/img/products__index/product1.jpg',
      title: 'Торт. Вкусный Маракеш',
      price: '3000',
    }
  },

  template: `
        <div class="shop__item catalog__item">
            <a href="single_page.html">
                <img class="shop__img" :src="img" alt="item">
                <h3 class="shop__name">{{ title }}</h3>
                <p class="shop__price"> от {{ price }}$</p>
            </a>
        </div>    
  `
});
