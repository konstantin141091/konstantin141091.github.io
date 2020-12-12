Vue.component('mobile-comp', {

  data() {
    return {
      isActive: false
    }
  },

  methods: {
    setIsActive() {
      if (this.isActive === false) {
        this.isActive = true;
        return true;
      } else {
        this.isActive = false;
        return false
      }

    }
  },

  template: `
            <div class="mobile" v-bind:class="{ mobile__show: isActive }">

                <ul class="mobile__list">
                    <li class="mobile__li"><a href="index.html">Главная</a></li>
                    <li class="mobile__li"><a href="catalog.html">Каталог</a></li>
                    <li class="mobile__li"><a href="catalog.html">Новинки</a></li>
                    <li class="mobile__li"><a href="catalog.html">Фотогалерея</a></li>
                    <li class="mobile__li"><a href="https://instagram.com/budet_vkusno?igshid=x5xxgu616ts8" target="_blank">Мы в инстаграм</a></li>
                </ul>
            </div>
  `
});
