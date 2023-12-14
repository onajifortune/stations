var button = document.querySelector('.button');
var sideBar = document.querySelector('.sidebar');
var mainContent = document.querySelector('.main-content')

button.addEventListener('click', () => {
    // console.dir(sideBar);
    if (sideBar.style.display === '') {
        sideBar.style.display = 'block';
    }

    else if (sideBar.style.display === 'block') {
        sideBar.style.display = '';
    }

    console.log(sideBar.style.textDecoration)
});

mainContent.addEventListener('click', () => {
    sideBar.style.display = '';
});
