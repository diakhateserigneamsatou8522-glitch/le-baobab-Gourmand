document.addEventListener('DOMContentLoaded', function () {
    var btnTop = document.querySelector('#btn-top');
    if (btnTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) { btnTop.classList.add('visible'); }
            else { btnTop.classList.remove('visible'); }
        });
        btnTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    var navbar = document.querySelector('#navbar-main');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) { navbar.classList.add('navbar-scrolled'); navbar.classList.remove('navbar-transparent'); }
            else { navbar.classList.remove('navbar-scrolled'); navbar.classList.add('navbar-transparent'); }
        });
    }
    var sections = document.querySelectorAll('section[id]');
    sections.forEach(function (s) {
        if (!s.classList.contains('hero-section') && !s.classList.contains('page-banner')) {
            s.style.opacity = '0'; s.style.transform = 'translateY(30px)';
            s.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
    });
    var sectionObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; sectionObs.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
    sections.forEach(function (s) { if (s.style.opacity === '0') sectionObs.observe(s); });
    var tCards = document.querySelectorAll('.testimonial-card');
    var tStars = document.querySelectorAll('.testimonial-stars i');
    tCards.forEach(function (c) { c.style.opacity = '0'; c.style.transform = 'translateY(40px)'; c.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; });
    tStars.forEach(function (s) { s.style.opacity = '0'; s.style.transform = 'scale(0)'; s.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; });
    var tSection = document.querySelector('#temoignages');
    if (tSection) {
        var tObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    tCards.forEach(function (c, i) { setTimeout(function () { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, i * 500); });
                    tStars.forEach(function (s, i) { setTimeout(function () { s.style.opacity = '1'; s.style.transform = 'scale(1)'; }, (tCards.length + i) * 300); });
                    tObs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        tObs.observe(tSection);
    }
    document.querySelectorAll('.dish-card').forEach(function (c) {
        c.addEventListener('mouseenter', function () {
            c.style.transform = 'translateY(-8px)'; c.style.boxShadow = '0 12px 30px rgba(139,58,15,0.25)';
            var img = c.querySelector('.card-img-top'); if (img) { img.style.transform = 'scale(1.05)'; img.style.transition = 'transform 0.5s ease'; }
        });
        c.addEventListener('mouseleave', function () {
            c.style.transform = 'translateY(0)'; c.style.boxShadow = '';
            var img = c.querySelector('.card-img-top'); if (img) { img.style.transform = 'scale(1)'; }
        });
    });
    var filtres = document.querySelectorAll('.filter-btn');
    var cartes = document.querySelectorAll('.menu-card');
    if (filtres.length > 0 && cartes.length > 0) {
        filtres.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filtres.forEach(function (b) { b.classList.remove('active', 'btn-brand'); b.classList.add('btn-outline-brand'); });
                btn.classList.add('active', 'btn-brand'); btn.classList.remove('btn-outline-brand');
                var cat = btn.dataset.filter;
                cartes.forEach(function (c) { c.style.display = (cat === 'all' || c.dataset.category === cat) ? 'block' : 'none'; });
            });
        });
    }
    var form = document.querySelector('#contact-form');
    if (form) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        function valider(input, ok, errId) {
            var err = document.querySelector('#' + errId);
            if (ok) { input.classList.remove('is-invalid'); input.classList.add('is-valid'); if (err) err.style.display = 'none'; }
            else { input.classList.remove('is-valid'); input.classList.add('is-invalid'); if (err) err.style.display = 'block'; }
            return ok;
        }
        var nom = document.querySelector('#nom'), email = document.querySelector('#email'), sujet = document.querySelector('#sujet'), msg = document.querySelector('#message');
        if (nom) nom.addEventListener('input', function () { valider(nom, nom.value.trim() !== '', 'nom-error'); });
        if (email) email.addEventListener('input', function () { valider(email, emailRegex.test(email.value.trim()), 'email-error'); });
        if (sujet) sujet.addEventListener('change', function () { valider(sujet, sujet.value !== '', 'sujet-error'); });
        if (msg) msg.addEventListener('input', function () { valider(msg, msg.value.trim() !== '', 'message-error'); });
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (valider(nom, nom.value.trim() !== '', 'nom-error') & valider(email, emailRegex.test(email.value.trim()), 'email-error') & valider(sujet, sujet.value !== '', 'sujet-error') & valider(msg, msg.value.trim() !== '', 'message-error')) {
                document.querySelector('#success-alert').classList.remove('d-none'); form.reset();
                [nom, email, sujet, msg].forEach(function (i) { i.classList.remove('is-valid', 'is-invalid'); });
                setTimeout(function () { document.querySelector('#success-alert').classList.add('d-none'); }, 5000);
            }
        });
    }
    var items = document.querySelectorAll('.commande-item'), totalEl = document.querySelector('#total-prix');
    if (items.length > 0 && totalEl) {
        items.forEach(function (item) {
            item.addEventListener('change', function () {
                var t = 0; items.forEach(function (cb) { if (cb.checked) t += parseInt(cb.value); });
                totalEl.textContent = t.toLocaleString('fr-FR') + ' FCFA';
            });
        });
    }
    var cmdForm = document.querySelector('#commande-form');
    if (cmdForm) {
        var adr = document.querySelector('#adresse'), cmdAlert = document.querySelector('#commande-alert');
        cmdForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (adr.value.trim() === '') { adr.classList.add('is-invalid'); return; } else { adr.classList.remove('is-invalid'); adr.classList.add('is-valid'); }
            var ok = false; items.forEach(function (i) { if (i.checked) ok = true; });
            if (!ok) { alert('Veuillez sélectionner au moins un article.'); return; }
            cmdAlert.classList.remove('d-none'); cmdForm.reset(); totalEl.textContent = '0 FCFA'; adr.classList.remove('is-valid');
            setTimeout(function () { cmdAlert.classList.add('d-none'); }, 5000);
        });
    }

});
