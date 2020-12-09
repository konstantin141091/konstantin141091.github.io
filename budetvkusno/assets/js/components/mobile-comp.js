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
                    <li class="mobile__li"><a href="#">Главная</a></li>
                    <li class="mobile__li"><a href="#">Каталог</a></li>
                    <li class="mobile__li"><a href="#">Новинки</a></li>
                    <li class="mobile__li"><a href="#">Фотогалерея</a></li>
                    <li class="mobile__li"><a href="#">Главная</a></li>
                    <li class="mobile__li"><a href="#">Каталог</a></li>
                    <li class="mobile__li"><a href="#">Новинки</a></li>
                    <li class="mobile__li"><a href="#">Фотогалерея</a></li>
                </ul>

            </div>
  `
});
