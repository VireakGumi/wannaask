let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let dailog = document.querySelector('#show');
let img = document.querySelector('#img');
let title = document.querySelector('#title');
btn1.addEventListener('click', () => {
    title.textContent = 'Ohhhhhhhhh God Dammmmmmmmm 😘💕';
    img.src = './img/49412322.jpg';
    dailog.style.display = 'block';
});
btn2.addEventListener('click', () => {
    title.textContent = 'You still wanna click NO so bad 😒😍';
    img.src = './img/OkayGuy.jpg';
    dailog.style.display = 'block';
});
btn2.addEventListener('mouseover', function () {
    btn2.style.left = `${Math.ceil(Math.random() * 100)}%`;
    btn2.style.top = `${Math.ceil(Math.random() * 100)}%`;
});
