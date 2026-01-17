function showPage(pageId) {
    // Cacher toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Afficher la page demandée
    document.getElementById(pageId).classList.add('active');
}

// Gestion du formulaire d'inscription
document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Inscription réussie ! Bienvenue sur EduStream.");
    showPage('videos'); // Rediriger vers les vidéos après inscription
});