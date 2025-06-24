document.addEventListener('DOMContentLoaded', async function() {
    const projectsContainer = document.querySelector('.project-posts');
    
    try {
        const response = await fetch('../projects/project_meta.json');
        if (!response.ok) throw new Error('Failed to load projects');
        
        const data = await response.json();
        
        data.projects.forEach(project => {
            const projectCard = document.createElement('article');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="card-content">
                    <span class="date">${project.date}</span>
                    <h3>${project.title}</h3>
                    <div class="project-meta">
                        
                        <div class="technologies">
                            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <p class="description">${project.description}</p>
                    <a href="../projects/${project.slug}/${project.slug}.html" class="project-link">View Project →</a>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
        
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = '<p class="error">Error loading projects. Please try again later.</p>';
    }
});