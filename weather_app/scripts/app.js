const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;
// destructure propietyes
  const { cityDets, weather } = data; //abreviatura de lo anterior cuando las cosas tiene el mismo nombre
// update details

  details.innerHTML =
    `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>`
    ;

// sacar el display none
const iconSrc = `img/icons/${weather.WeatherIcon}.svg` ;
icon.setAttribute('src', iconSrc);

// let timeSrc = null;
// if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // } else {
    //   timeSrc = 'img/night.svg';
    // } Modo largo

const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg' ;//modocorto


time.setAttribute('src', timeSrc);







if(card.classList.contains('d-none')){
  card.classList.remove('d-none');
};

}


cityForm.addEventListener('submit', e => {
  e.preventDefault();

  //obtener el valor de la cudad

  const city = cityForm.city.value.trim();
  cityForm.reset();

  forecast.updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

//set local storage
localStorage.setItem('city', city);

});

if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
      .then(data => updateUI(data))
      .catch(err => console.log(err));
};
