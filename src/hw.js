import countriesTempl from './templates/countries.hbs';
import countriesList from './templates/list-countries.hbs';

const refs = {
  input: document.querySelector('.js-search'),
  ul: document.querySelector('.country-feedback'),
  list: document.querySelector('.countries'),
};

const debouncedCallback = _.debounce(event => {
  const inputValue = event.target.value;
  if (inputValue !== '') {
    console.log(inputValue);
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;

    refs.ul.innerHTML = '';
    refs.list.innerHTML = '';

    https: fetch(url)
      .then(response => response.json())
      .then(countries => {
        console.log(countries);
        let markupadd = countriesList(countries);
        const markup = countriesTempl(countries);

        countries.length > 10
          ? alert('Error')
          : countries.length >= 2 && countries.length <= 10
          ? refs.ul.insertAdjacentHTML('beforeend', markupadd)
          : countries.length === 1
          ? refs.list.insertAdjacentHTML('beforeend', markup)
          : alert('Try again');
      });
  }
}, 500);

refs.input.addEventListener('input', debouncedCallback);
