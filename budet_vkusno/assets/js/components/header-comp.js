Vue.component('header-comp', {

  data() {
    return {
      canScroll: true,
      isScroll: false,
      isFixed: false,
      mainEl: this.$root.$refs.main,
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
        this.mainEl.classList.add('sticky');
      } else {

        this.isFixed = false;
        this.canScroll = true;
        this.mainEl.classList.remove('sticky');
        this.handleScroll();
      }

    }

  },
  mounted() {
    this.mainEl = this.$root.$refs.main;
  },

  template: `
             
            <header class="header header__animation" id="header" 
            v-scroll="handleScroll"  v-bind:class="{ header__scroll: isScroll, fixed: isFixed }">            
                <div class="container header__container">
                    <div class="logo header__logo">
                        <a href="index.html"><img class="logo__img" src="./assets/img/logo.svg" alt="logo"></a>
                    </div>
                    <nav class="menu header__menu">
                        <ul class="menu__list">
                            <li class="menu__li"><a href="index.html">Главная</a></li>
                            <li class="menu__li"><a href="catalog.html">Каталог</a></li>
                            <li class="menu__li"><a href="catalog.html">Новинки</a></li>
                            <li class="menu__li"><a href="catalog.html">Фотогалерея</a></li>
                            <li class="menu__li"><a href="https://instagram.com/budet_vkusno?igshid=x5xxgu616ts8" target="_blank">Инстаграм</a></li>
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




