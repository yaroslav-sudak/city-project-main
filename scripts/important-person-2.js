let popUpBackground = document.getElementById('pop-up__background');
let items = Array.from(document.getElementsByClassName('person'));
let popUp = document.getElementById('pop-up');

popUpBackground.addEventListener('click', () => {
  popUp.classList.add('hidden');
})

items.forEach(element => {
  element.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  })
});