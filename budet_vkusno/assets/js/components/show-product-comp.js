Vue.component('show-product-comp', {

  data() {
    return {
      img: '',
      isShow: false,
    }
  },

  methods: {
    show(img) {
      this.img = img;
      this.isShow = true;
    },

    close() {
      this.isShow = false;
    }
  },

  template: `
            <div class="product__bigImg" v-show="isShow">
                <i class="fas fa-chevron-left product__bigArrow"></i>
                <i class="fas fa-times product__close" @click="close"></i>

                <i class="fas fa-chevron-left product__bigArrow"></i>
                <img :src="img" alt="product">
            </div>
            
            `
});
