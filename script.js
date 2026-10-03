document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const html = document.documentElement;
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            const lbl = toggleBtn.querySelector('.lbl');
            if (lbl) lbl.textContent = isDark ? 'oscuro' : 'claro';
            
            const mark = toggleBtn.querySelector('.toggle-mark');
            if (mark) mark.textContent = isDark ? '◐' : '◑';
        });
        
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            const lbl = toggleBtn.querySelector('.lbl');
            if (lbl) lbl.textContent = 'oscuro';
            const mark = toggleBtn.querySelector('.toggle-mark');
            if (mark) mark.textContent = '◐';
        }
    }

    const menuTrigger = document.querySelector('.trigger');
    const menu = document.querySelector('app-menu .menu');
    if (menuTrigger && menu) {
        menuTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = menuTrigger.getAttribute('aria-expanded') === 'true';
            menuTrigger.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                menu.style.visibility = 'visible';
                document.body.classList.add('nav-open');
            } else {
                menu.style.visibility = 'hidden';
                document.body.classList.remove('nav-open');
            }
        });

        document.addEventListener('click', (e) => {
            if (menu.style.visibility === 'visible' && !menu.contains(e.target)) {
                menu.style.visibility = 'hidden';
                menuTrigger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('nav-open');
            }
        });
    }
});
