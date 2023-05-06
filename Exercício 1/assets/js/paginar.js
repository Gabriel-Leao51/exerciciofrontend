function paginar(selectedPage) {
    const currentActive = document.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove('active');
    }
  
    const selectedElement = document.getElementById(selectedPage);
    selectedElement.classList.add('active');
  }
  
  const pageButtons = document.querySelectorAll(".page-link");
  pageButtons.forEach((button, index) => {
    const pageNumber = index;
    button.setAttribute('onclick', `paginar('pag${pageNumber}')`);
  });