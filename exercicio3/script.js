const elementh1 = document.querySelector('h1')
console.log(elementh1);


// mudar o texto html
elementh1.textContent += ' Novo DOM!';

// mudar o Css
elementh1.style.backgroundColor = 'pink';
elementh1.style.color = 'green';

const elementImg = document.querySelector('img');
elementImg.alt = 'Essa imagem é de teste.';

