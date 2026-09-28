document.addEventListener('DOMContentLoaded', () => {
    let selectElem = document.querySelector('select');
    let logoBlue = document.querySelector('#logo-blue');
    let logoWhite = document.querySelector('#logo-white');

    function changeTheme() {
        let current = selectElem.value;
        let isDark = current === 'dark';

        document.body.classList.toggle('dark', isDark);
        document.body.style.backgroundColor = isDark ? 'black' : 'white';
        document.body.style.color = isDark ? 'white' : 'black';

        logoBlue.style.display = isDark ? 'none' : 'block';
        logoWhite.style.display = isDark ? 'block' : 'none';
    }

    selectElem.addEventListener('change', changeTheme);
});