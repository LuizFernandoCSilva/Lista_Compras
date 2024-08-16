const input = document.querySelector('input');
const form = document.querySelector('form');
const main = document.querySelector('main');
const section = document.querySelector('section');

// Função para salvar dados no localStorage
function saveData() {
  const items = Array.from(main.querySelectorAll('ul')).map(ul => ul.querySelector('li').textContent);
  localStorage.setItem('todoItems', JSON.stringify(items));
}

// Função para adicionar um item à lista
function addItem(value) {
  const newUl = document.createElement('ul');

  const newButtonCheckBox = document.createElement('button');
  newButtonCheckBox.id = 'checkbox';
  newButtonCheckBox.textContent = 'a';

  const newListItem = document.createElement('li');
  newListItem.id = 'compras';
  newListItem.textContent = value;

  const newButtonDumpster = document.createElement('button');
  newButtonDumpster.id = 'dumpster';
  newButtonDumpster.textContent = 'a';

  const newImgConfirm = document.createElement('img');
  newImgConfirm.id = 'confirm';
  newImgConfirm.src = './icons/tick-double-01-stroke-rounded.svg';
  newImgConfirm.alt = 'confirmação';

  const newImgDumpster = document.createElement('img');
  newImgDumpster.src = './icons/Frame.svg';
  newImgDumpster.alt = 'Lixeira';

  newButtonCheckBox.appendChild(newImgConfirm);
  newButtonDumpster.appendChild(newImgDumpster);

  newUl.appendChild(newButtonCheckBox);
  newUl.appendChild(newListItem);
  newUl.appendChild(newButtonDumpster);

  main.appendChild(newUl);

  newButtonCheckBox.addEventListener('click', () => {
    newImgConfirm.classList.toggle('toggle');
  });

  newButtonDumpster.addEventListener('click', () => {
    newUl.classList.add('fade-out');
    section.classList.add('delete');

    const buttonX = document.getElementById('x');
    if (buttonX) {
      buttonX.addEventListener('click', () => {
        section.classList.remove('delete');
      });
    }

    newUl.addEventListener('transitionend', function handleTransitionEnd(event) {
      newUl.remove();
      newUl.removeEventListener('transitionend', handleTransitionEnd);
      saveData();
    });

    setTimeout(() => {
      section.classList.remove('delete');
    }, 2000);
  });
}

// Função para carregar dados do localStorage
function loadData() {
  const items = JSON.parse(localStorage.getItem('todoItems')) || [];
  items.forEach(value => addItem(value));
}

// Carregar dados ao carregar a página
window.addEventListener('DOMContentLoaded', loadData);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const regex = /\d+/g;
  const value = input.value.replace(regex, '');

  if (value) {
    addItem(value);
    input.value = '';
    saveData();
  }
});
