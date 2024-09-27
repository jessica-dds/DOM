const element = document.querySelector("h2.subtitle");
const elements = document.querySelectorAll("h2");


// selecionar um elemento
console.log('element', element);
// selecionar todos elementos
console.log('elements', elements);

//selecionar coleção de elementos
elements.forEach(elementh2 => {
    console.log('elementh2', elementh2);

});

// ou selecionar coleção de elementos
for (let elementh2 of elements) {
    console.log('elementh2', elementh2);
}

