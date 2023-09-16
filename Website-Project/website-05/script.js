function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    menuToggle.classList.toggle('active');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
