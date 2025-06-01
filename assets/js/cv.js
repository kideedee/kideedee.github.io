// Animate skill bars when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    setupDownloadButton();
    setupScrollAnimations();
});

// Animate skill progress bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Delay animation slightly for better effect
    setTimeout(() => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 500);
}

// Setup download button functionality
function setupDownloadButton() {
    const downloadBtn = document.querySelector('.download-btn');
    const homeBtn = document.querySelector('.home-btn');
    
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Simple print functionality
        window.print();
        
        // You can replace this with actual PDF download logic
        // For example: downloadPDF() or redirect to PDF file
    });
    
    // Add hover effect for home button
    homeBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    homeBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Setup scroll animations for sections
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide sections for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Smooth scrolling for any internal links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effects to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Print styles optimization
window.addEventListener('beforeprint', function() {
    // Hide navigation buttons when printing
    document.querySelector('.download-btn').style.display = 'none';
    document.querySelector('.home-btn').style.display = 'none';
    
    // Adjust background for print
    document.body.style.background = 'white';
});

window.addEventListener('afterprint', function() {
    // Show navigation buttons after printing
    document.querySelector('.download-btn').style.display = 'flex';
    document.querySelector('.home-btn').style.display = 'flex';
    
    // Restore background
    document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
});