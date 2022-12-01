
const navItems = $$('.nav-item');

const swapTable = function () {
    navItems.forEach(item => {
        item.classList.remove('active');
    })
}

const clickSwapTable = function () {
    navItems.forEach(item => {
        item.onclick = function (e) {
            swapTable();
            item.classList.add('active');
        }
    });
}
clickSwapTable();
