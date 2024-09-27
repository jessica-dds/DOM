const elementButton = document.querySelector('.btn')

elementButton.onclick = (event) => {
    console.log('btn foi clicado.');
    const button = event.target;
    if (button.style.backgroundColor !== 'green') {
        button.style.backgroundColor = "green";
    } else
        button.style.backgroundColor = 'rgb(240, 240, 240)';
};

