
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
  
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight * 0.75) {
        element.classList.add('visible');
      }
    });
  };
  
  
  const hoverEffect = () => {
    const buttons = document.querySelectorAll('.btn');
    const images = document.querySelectorAll('img');
  
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.classList.add('btn-hover');
      });
      button.addEventListener('mouseout', () => {
        button.classList.remove('btn-hover');
      });
    });
  
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.classList.add('image-hover');
      });
      image.addEventListener('mouseout', () => {
        image.classList.remove('image-hover');
      });
    });
  };
  
  
  document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll(); 
    hoverEffect(); 
  });
  
  
  
const handleScroll = () => {
    const logo = document.getElementById('logo');  
    
    if (window.scrollY > 50) {  
        logo.classList.add('shrink-logo');  
    } else {
        logo.classList.remove('shrink-logo');  
    }
};


document.addEventListener('scroll', handleScroll);


handleScroll();

  