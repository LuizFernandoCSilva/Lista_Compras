const input = document.querySelector('input');
const form = document.querySelector('form');
const main = document.querySelector('main');
const section = document.querySelector('section');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const regex = /\d+/g 
  const value = input.value.replace(regex, '');

  if (value) {
    const newUl = document.createElement('ul');
    
    // Cria o novo botão checkbox
    const newButtonCheckBox = document.createElement('button');
    newButtonCheckBox.id = 'checkbox';
    newButtonCheckBox.textContent = 'a'; // Adicione o conteúdo do botão

    // Cria o novo item de lista
    const newListItem = document.createElement('li');
    newListItem.id = 'compras';
    newListItem.textContent = value; // Adiciona o valor do input ao item de lista

    // Cria o novo botão dumpster
    const newButtonDumpster = document.createElement('button');
    newButtonDumpster.id = 'dumpster';
    newButtonDumpster.textContent = 'a'; // Adicione o conteúdo do botão

    // Cria o novo elemento de imagem para o confirm
    const newImgConfirm = document.createElement('img');
    newImgConfirm.id = 'confirm';
    newImgConfirm.src = './icons/tick-double-01-stroke-rounded.svg'; // Defina o caminho para a imagem
    newImgConfirm.alt = 'confirmação';

    // Cria o novo elemento de imagem para o dumpster
    const newImgDumpster = document.createElement('img');
    newImgDumpster.src = './icons/Frame.svg'; // Defina o caminho para a imagem
    newImgDumpster.alt = 'Lixeira';

    // Adiciona as imagens aos botões
    newButtonCheckBox.appendChild(newImgConfirm);
    newButtonDumpster.appendChild(newImgDumpster);

    // Adiciona os botões e o item de lista à nova UL
    newUl.appendChild(newButtonCheckBox);
    newUl.appendChild(newListItem);
    newUl.appendChild(newButtonDumpster);

    // Adiciona a nova UL ao main
    main.appendChild(newUl);
    // Limpa o input
    input.value = '';

    // Adiciona os event listeners 
    newButtonCheckBox.addEventListener('click', (event) => {
      newImgConfirm.classList.toggle('toggle');
    });

    newButtonDumpster.addEventListener('click', (event) => {
      newUl.classList.add('fade-out');
      section.classList.add("delete");

      const buttonX = document.getElementById('x')

      if (buttonX) {
        buttonX.addEventListener('click', (event) => {
          section.classList.remove("delete");
        });
      }
      setTimeout(() => {
        section.classList.remove("delete");
      }, 3000);
    });
  }
});
