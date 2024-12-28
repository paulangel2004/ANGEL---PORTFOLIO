// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust for fixed header
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Form validation
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission for demo purposes
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Thank you for your message!');
    this.reset(); // Reset the form
  });
  
  // Back to top button functionality
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '⬆';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background: #3a007a;
    color: #fff;
    border: none;
    border-radius: 50%;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  `;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  