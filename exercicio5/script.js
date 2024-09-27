const colecaoDeLi = document.querySelectorAll('li')
console.log(colecaoDeLi);

for (let li of colecaoDeLi) {
    li.onclick = (event) => {
        const elementoLiClicado = event.target;

        if (elementoLiClicado.style.backgroundColor !== 'rgb(204, 204, 204)') {
            elementoLiClicado.style.backgroundColor = 'rgb(204, 204, 204)';
            elementoLiClicado.style.textDecoration = 'line-through';
            return;
        }
        elementoLiClicado.style.backgroundColor = '#9b6abb';
        elementoLiClicado.style.textDecoration = 'none';
    };
}