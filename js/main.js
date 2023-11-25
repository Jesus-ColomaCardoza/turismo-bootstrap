// This code is to hide the menu when select an opction of sitios page in mobile view
const bsCollapse = new bootstrap.Collapse('#navbarNavDropdown', {
    toggle: false
})

bsCollapse - addEventListener('click', (e) => {
    if (e.target.matches('ul .dropdown-item')) {
        bsCollapse.hide();
    }
})