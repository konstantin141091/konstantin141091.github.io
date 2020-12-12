Vue.component('footer-comp', {

  template: `
            <footer class="footer">
                <div class="footer__container">
                    <div class="footer__top">
                        <div class="container footer__container-top">
                            <div class="footer__col">
                                <div class="footer__contacts">
                                    <div class="footer__logo">
                                        <a href="index.html"><img src="assets/img/footer-logo.svg" alt="logo"></a>
                                    </div>
                                    <div class="footer__phones">
                                        <p>
                                            WhatsApp , Telegram <br>
                                            +7 995 114-14-20
                                        </p>
                                    </div>
                                    <div class="footer__schedule">
                                        <p>
                                            <span>График работы:</span>
                                            10:00 - 20:00
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div class="footer__col">
                                <div class="footer__description">
                                    <p>
                                        Только натуральные, качественные <br>
                                        и свежие ингредиенты, тщательно <br>
                                        подобранные вкусовые сочетания, <br>
                                        которые никого не оставят <br>
                                        равнодушным. <br>
                                    </p>
                                </div>
                            </div>
                            <div class="footer__col">
                                <nav class="footer__menu">
                                    <ul>
                                        <li><a href="index.html">Главная</a></li>
                                        <li><a href="catalog.html">Каталог</a></li>
                                        <li><a href="catalog.html">Новинки</a></li>
                                        <li><a href="catalog.html">Фотогалерея</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="footer__col">
                                <div class="footer__socials">
                                    <div class="social-link">
                                        <a href="https://instagram.com/budet_vkusno?igshid=x5xxgu616ts8" target="_blank">
                                            <i class="fab fa-instagram"></i>
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__bottom">
                        <div class="container">
                            <div class="footer__copyright">
                                <span>© 2020 "Будет Вкусно" Домашняя кондитерская</span> <br>
                                Created by Konstantin Sudakov
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            `
});
