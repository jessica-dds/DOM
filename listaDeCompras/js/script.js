const inputRegister = document.querySelector('input');
const buttonRegister = document.querySelector('button');
const elementUl = document.querySelector('ul');




buttonRegister.onclick = function () {

    // verificando o valor do input 
    if (inputRegister.value.length <= 0) {
        inputRegister.classList.add('borda-vermelha');
        return;
    }

    // criando uma li 
    const newLi = document.createElement('li');

    // criando o botão de excluir o elemento li
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Excluir';

    // adicionado o onclick que remove o elemento li criado
    buttonDelete.onclick = () => {
        newLi.remove();
    }

    // criando um span pra incluir o texto 
    const elementSpan = document.createElement('span');
    elementSpan.textContent = inputRegister.value;

    // injetando o elementSpan e o buttonDelete na li 
    newLi.appendChild(elementSpan);
    newLi.appendChild(buttonDelete);

    // criando o evento de clique para a li
    newLi.onclick = (event) => {
        const elementLi = event.target;
        elementLi.classList.toggle('comprado');
    }

    // injetando li no html
    elementUl.appendChild(newLi);

    // limpando o input de cadastro
    inputRegister.value = " "
};

