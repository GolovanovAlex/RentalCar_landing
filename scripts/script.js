document.getElementById('main-action').onclick = function () {
  document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('car-link').onclick = function () {
  document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
};
document.getElementById('contact-link').onclick = function () {
  document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
};

let buttons = document.getElementsByClassName('car__button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
  };
}
document.getElementById('contact-action').onclick = function () {
  if (document.getElementById('name-input').value === '') {
    alert('Заполните поле - Имя!');
  } else if (document.getElementById('phone-input').value === '') {
    alert('Заполните поле - Телефон!');
  } else if (document.getElementById('car-input').value === '') {
    alert('Заполните поле - Автомобиль!');
  } else {
    alert('Спасибо за заявку. Мы связемся с Вами у ближайшее время.');
  }
};
document.addEventListener('DOMContentLoaded', function () {
  let layer = document.querySelector('.contact__img');
  document.addEventListener('mousemove', (event) => {
    layer.style.transform =
      'translate3d(' +
      (event.clientX * 0.4) / 1 +
      'px,' +
      (event.clientY * 0.2) / 10 +
      'px,0px)';
  });

  const elem = document.querySelector('.info');
  document.addEventListener('scroll', () => {
    elem.style.backgroundPositionX = '0' + 0.6 * window.pageYOffset + 'px';
  });
});
