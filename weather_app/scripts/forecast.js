class Forecast {
  constructor() {
    this.key = 'VwnFdWlmzAZ9jpFYOngggd2Njt1RAns0';
    this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/'
    this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWheather(cityDets.Key);
    return { cityDets, weather };  // cityDets: cityDets, // se puede borrar uno de los dos y sigue funcionando, cuando propiedad y valor son iguales. // weather: weather
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}` // ? agrega info como query
    const response = await fetch(this.cityURL + query)
    const data = await response.json();
    return (data[0]); //trae el match mas cercano a lo escrito
  }
  async getWheather(id) {
    const query = `${id}?apikey=${this.key}` // ? agrega info como query
    const response = await fetch(this.weatherURL + query)
    const data = await response.json(); //promesa
    return (data[0]); //trae el match mas cercano a lo escrito
  }

}
