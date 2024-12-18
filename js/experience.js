document.addEventListener('DOMContentLoaded', function() {
    // Make journey steps interactive
    const journeySteps = document.querySelectorAll('.journey-step');
    journeySteps.forEach(step => {
        step.addEventListener('click', () => {
            step.classList.add('active');
            setTimeout(() => step.classList.remove('active'), 500);
        });
    });

    // Add random floating particles
    const experienceSection = document.querySelector('.experience-section');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 5 + 's';
        experienceSection.appendChild(particle);
    }
}); 