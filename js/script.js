// Sample projects data - you'll replace with your actual projects
const projects = [
    {
        title: "Predictive Sales Model",
        description: "Machine learning model to predict future sales with 92% accuracy",
        image: "images/project1.jpg",
        technologies: ["Python", "Scikit-learn", "Pandas"],
        github: "#",
        demo: "#"
    },
    {
        title: "Customer Segmentation",
        description: "Unsupervised learning to identify customer groups for targeted marketing",
        image: "images/project2.jpg",
        technologies: ["Python", "K-means", "Matplotlib"],
        github: "#",
        demo: "#"
    }
];


// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load projects
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="btn">GitHub</a>
                    <a href="${project.demo}" class="btn">Live Demo</a>
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Dark mode toggle (optional)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    document.querySelector('#navbar ul').appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});