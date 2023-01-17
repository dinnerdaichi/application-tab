const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');


const init = () => {
  $content[0].style.display = 'block';
};
init();

const handleClick = (e) => {
  e.preventDefault();
  console.log('Click!');
}

const $this = e.target();


let index = 0;
while( index < $nav.length){
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
}
