const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();

    if (input.value !== '') {
        console.log(input.value);
        const li = document.createElement('li');
    
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = '';
    }
})