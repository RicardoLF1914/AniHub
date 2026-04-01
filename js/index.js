// Capturar clique nos perfis e armazenar em localStorage
document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', (event) => {
        // Obter a figura (que contém img e figcaption)
        const figure = profile.querySelector('figure');
        const img = figure.querySelector('img');
        const figcaption = figure.querySelector('figcaption');

        // Armazenar perfil ativo em localStorage
        const profileData = {
            name: figcaption.textContent,
            image: img.src,
            alt: img.alt
        };

        localStorage.setItem('activeProfile', JSON.stringify(profileData));
    });
});
