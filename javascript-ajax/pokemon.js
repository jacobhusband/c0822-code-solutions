function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    window.open(`https://http.cat/${xhr.status}`, '_blank');
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');