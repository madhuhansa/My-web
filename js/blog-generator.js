document.addEventListener('DOMContentLoaded', async function() {
    const blogContainer = document.querySelector('.blog-posts');
    
    try {
        // Fetch the meta.json file
        const response = await fetch('./meta.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const blogMeta = await response.json();
        
        // Generate HTML for each post
        blogMeta.posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-preview';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span class="post-date">${post.date}</span>
                    <span class="read-time">${post.readTime} min read</span>
                    ${post.tags ? `<span class="post-tags">${post.tags.map(tag => `#${tag}`).join(' ')}</span>` : ''}
                </div>
                <div class="post-excerpt">
                    <p>${post.excerpt}</p>
                </div>
                <a href="${post.slug}/${post.slug}.html" class="read-more">Read More →</a>
            `;
            blogContainer.appendChild(postElement);
        });

        
        
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogContainer.innerHTML = '<p class="error">Error loading blog posts. Please try again later.</p>';
    }
});