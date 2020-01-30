const key = 'VwnFdWlmzAZ9jpFYOngggd2Njt1RAns0';


const getWheather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}` // ? agrega info como query
  const response = await fetch(base + query)
  const data = await response.json(); //promesa
  return (data[0]); //trae el match mas cercano a lo escrito

};

//getcity information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}` // ? agrega info como query
  const response = await fetch(base + query)
  const data = await response.json();
  return (data[0]); //trae el match mas cercano a lo escrito
};


// getCity('manchester').then(data => {
//    return getWheather(data.Key)
//  }).then(data => {
//    console.log(data)
//  })
//  .catch(err => console.log(err));
