window.addEventListener('scroll', function() {
  header = document.getElementById('header-fixed');
  logo = document.getElementById('logo-fixed');
  if(pageYOffset > 20) {

    header.classList.add('header__fixed');
    logo.classList.add('logo__fixed')
  }else {

    header.classList.remove('header__fixed');
    logo.classList.remove('logo__fixed')
  }
});
