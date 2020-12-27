window.addEventListener('DOMContentLoaded', function(){
    let mySwiper = new Swiper('.swiper-container', {
      speed: 1000,
      slidesPerView: 1,
      direction: 'horizontal',
      allowTouchMove: false,  
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      loop: true,
    });
    let mySwiper1 = new Swiper('.swiper-container_1', {
      direction: 'horizontal',
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      initialSlide: 0,
      watchOverflow: true,
      slidesPerColumnFill: 'row',
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         1401: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerColumn: 2,
          spaceBetween: 50,
         },
         590: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumn: 2,
          spaceBetween: 34,
         },
      },
    });
    $( function() {
      $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: "content",
        header: "h3",
      });
    });
  const elements = document.getElementsByName('select');
  elements.forEach((el)=>{
    const choices = new Choices(el, {
      searchEnabled: false,
      position: 'bottom',
      })
  });
      
      let listButtons = document.querySelectorAll('.header-button-bottom');
      listButtons.forEach(function(item){
        item.addEventListener('click', function(event) {
          event.preventDefault();
          let listId = this.getAttribute('direction');
          let listElem = document.querySelector('.header-scrollbar-bottom[direction="' + listId + '"]');
          if (listElem.style.display==='none') { 
            listElem.style.display ='block';
            }
            else {
              listElem.style.display = 'none';
            }
         });
        });

      let modalButtons = document.querySelectorAll('.js-open-modal');
      let closeButtons = document.querySelectorAll('.js-modal-close');
      modalButtons.forEach(function(item){
        item.addEventListener('click', function(event) {
          event.preventDefault();
          let modalId = this.getAttribute('data-modal');
          let modalElem = document.querySelector('.gallery-modal_window[data-modal="' + modalId + '"]');
          modalElem.style.display = 'flex';
         });
        });
         closeButtons.forEach(function(item) {
          item.addEventListener('click', function(e) {
            let parentModal = this.closest('.gallery-modal_window');
            parentModal.style.display = 'none';
          });
    });
      
      let searchButton = document.querySelector('.search-button');
      let searchCloseButton = document.querySelector('.search-close-button');
      let search = document.querySelector('.search');
      let searchInput = document.querySelector('.search-input');
      searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      search.classList.toggle('search-is_active');
      searchInput.classList.toggle('search-input-is_active');
      searchButton.classList.toggle('search-button-is_active');
      searchCloseButton.classList.toggle('search-close-button--appear');
      });

      searchCloseButton.addEventListener('click', function(event) {
        event.preventDefault();
        search.classList.remove('search-is_active');
        searchInput.classList.remove('search-input-is_active');
        searchButton.classList.remove('search-button-is_active');
        searchCloseButton.classList.remove('search-close-button--appear');
        });
  })