Vue.component('header-comp', {

  data() {
    return {
      canScroll: true,
      isScroll: false,
      isFixed: false,
    }
  },

  methods: {

    handleScroll: function (evt, el) {
      if (this.canScroll === true) {
        this.isFixed = false;
        if (window.scrollY > 100) {
          this.isScroll = true;
        } else {
          this.isScroll = false;
        }
      }
    },

    mobile() {
      if (this.$root.$refs.mobile.setIsActive()) {

        this.isFixed = true;
        this.canScroll = false;
        this.isScroll = false;
      } else {

        this.isFixed = false;
        this.canScroll = true;
        this.handleScroll();
      }
    }

  },
  // mounted() {
  //   console.log(this.$root.$refs.mob);
  // },

  template: `
             
            <header class="header header__animation" id="header" 
            v-scroll="handleScroll"  v-bind:class="{ header__scroll: isScroll, header__fixed: isFixed }">            
                <div class="container header__container">
                    <div class="logo header__logo">
                        <a href="#"><img class="logo__img" src="./assets/img/logo.svg" alt="logo"></a>
                    </div>
                    <nav class="menu header__menu">
                        <ul class="menu__list">
                            <li class="menu__li"><a href="index.html">Главная</a></li>
                            <li class="menu__li"><a href="catalog.html">Каталог</a></li>
                            <li class="menu__li"><a href="single_page.html">Новинки</a></li>
                            <li class="menu__li"><a href="#">Фотогалерея</a></li>
                        </ul>
                    </nav>
                    <div class="burger" @click="mobile">
                        <button class="burger__button">
                            <i class="burger__bar" v-bind:class="{ burger__top: !canScroll }"></i>
                            <i class="burger__bar" v-bind:class="{ burger__middle: !canScroll }"></i>
                            <i class="burger__bar" v-bind:class="{ burger__bottom: !canScroll }"></i>
                        </button>
                    </div>
                </div>
            </header>           

  `
});

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})




