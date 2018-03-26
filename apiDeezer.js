
var url = 'http://gateway.marvel.com/v1/public/events/29/characters?ts=1';
var apikey = '91c5887afde6559383fe644fc7db6f57';
var hash = '03ea1255703ef7755da11ac75c827640';

const endpoint = url + '&apikey=' + apikey + '&hash=' + hash;
const songsList = [];
//const searchInput = document.querySelector('.search');
//const suggestions = document.querySelector('.suggestions');
//const emojiPattern = Array.from(document.querySelectorAll('.emoji-pattern'));


//Event Infinity War 29
let fetchData = {
  method: 'GET',
  mode: 'no-cors'
}
fetch(endpoint)
  .then(resp => resp.json())
  .then(list => {
    //songsList.push(...list.data); 
    //console.log(list.data.results.title);
    songsList.push(...list.data.results)
    //console.log(songsList[1].title);
    const myli = showList(songsList);
  });
function showList(songsList) {
  const html = songsList.map(song => {
    return `
    
    <li>
      <h2>${song.name}</h2>
      <img src=${song.thumbnail.path}/portrait_fantastic.${song.thumbnail.extension} />
    </li>
    `
  }).join('');
  list.innerHTML = html;
  //console.log(html);

  //console.log(songsList[1].title);
}
const list = document.querySelector('.characters');


function findMatches(wordToMatch, songsList) {
  return songsList.filter(emoji =>
    emoji.aliases.some(alias => alias.indexOf(wordToMatch) !== -1)
  );
}

function renderMatches(arr) {
  const html = arr.map(song => {
    const {
      title,
      duration
    } = song;
    return `
      <li class="icon">
        <div>${title} ${duration}</div>
      </li>
    `
  }).join('');
  suggestions.innerHTML = html;
}

function updateMatches() {
  const matchArray = findMatches(this.value, songsList);
  renderMatches(matchArray);
}

function changeBackground(e) {
  if (!e.target.matches('abbr')) return;
  const emoj = e.target.innerText;
  emojiPattern.map(pattern => pattern.textContent = emoj);

}
/*
searchInput.addEventListener('change', updateMatches);
searchInput.addEventListener('keyup', updateMatches);
suggestions.addEventListener('click', changeBackground);*/