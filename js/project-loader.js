document.addEventListener('DOMContentLoaded', async function() {
    try {
        const pathParts = window.location.pathname.split('/');
        const projectSlug = pathParts[pathParts.length - 2];
        
        const response = await fetch('../projects/project_meta.json');
        if (!response.ok) throw new Error('Failed to load project data');
        
        const data = await response.json();
        const project = data.projects.find(p => p.slug === projectSlug);
        
        if (project) {
            document.title = `${project.title} | Projects`;
            document.querySelector('.project-title').textContent = project.title;
            document.querySelector('.project-date').textContent = project.date;
            document.querySelector('.project-description').textContent = project.description;
            document.querySelector('.project-hero').src = `../projects/${project.image}`;
            
            const techContainer = document.querySelector('.project-technologies');
            techContainer.innerHTML = project.technologies.map(tech => 
                `<span>${tech}</span>`
            ).join('');
        }
        
    } catch (error) {
        console.error('Error loading project:', error);
    }
});