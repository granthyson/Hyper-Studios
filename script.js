    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  