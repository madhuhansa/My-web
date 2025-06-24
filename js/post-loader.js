document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Extract post slug from URL (e.g., "post1" from ".../post1/post1.html")
        const postSlug = window.location.pathname.split('/').slice(-2, -1)[0];
        
        // Load central meta.json
        const response = await fetch('../meta.json');
        const blogMeta = await response.json();
        
        // Find metadata for this post
        const postMeta = blogMeta.posts.find(post => post.slug === postSlug);
        if (!postMeta) throw new Error('Post not found in meta.json');
        
        // Update page metadata
        document.title = `${postMeta.title} | My Blog`;
        document.querySelector('.post-title').textContent = postMeta.title;
        document.querySelector('.post-date').textContent = postMeta.date;
        document.querySelector('.post-author').textContent = `By: ${postMeta.author}`;
        document.querySelector('.read-time').textContent = `${postMeta.readTime} min read`;
        
    } catch (error) {
        console.error('Error loading post metadata:', error);
    }
});