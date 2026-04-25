const faqItems = document.querySelectorAll('.faqItem');

faqItems.forEach((item) => {
  const question = item.querySelector('.faqQuestion');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    
    faqItems.forEach((i) => i.classList.remove('open'));

    if (!isOpen) {
      item.classList.add('open');
    } else {item.classList.remove('open');}
  })
})