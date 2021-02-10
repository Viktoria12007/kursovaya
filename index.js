window.addEventListener('DOMContentLoaded', function(){
  
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
  
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

       if (id === '#') return;
       
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

};

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

  let listScrollbar = document.querySelector('.simplebar-scrollbar.simplebar-visible');
  //console.log(listScrollbar.getAttribute('style'));
  //console.log(listScrollbar);

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


  let bannerSwiper = new Swiper('.banner-swiper-container', {
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
      slideClass: 'banner-swiper-slide',
  });

  const elements = document.getElementsByName('select');
    elements.forEach((el)=>{
      const choices = new Choices(el, {
      searchEnabled: false,
      position: 'bottom',
    })
  });

  let gallerySwiper = new Swiper('.gallery-swiper-container', {
      direction: 'horizontal',
      autoHeight: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      initialSlide: 0,
      watchOverflow: true,
      slidesPerColumnFill: 'row',
      spaceBetween: 0,
      slideClass: 'gallery-swiper-slide',
      pagination: {
        el: '.gallery-swiper-pagination',
        type: 'fraction',
        clickable: true,
      },
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
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
    
  let gallerySlideLinks = document.querySelectorAll('.gallery-slide-link');
    gallerySlideLinks.forEach(function(item) {
      let backgroundImage = item.dataset.modal;
      item.style.backgroundImage = 'url(../img/' + backgroundImage + '.jpg)';
    });
      
  let modalButtons = document.querySelectorAll('.js-open-modal');
  let closeButtons = document.querySelectorAll('.js-modal-close');
  let overlay = document.querySelector('.overlay');

    modalButtons.forEach(function(item){
      item.addEventListener('click', function(event) {
        event.preventDefault();
        let modalId = this.getAttribute('data-modal');
        let modalElem = document.querySelector('.gallery-modal_window[data-modal="' + modalId + '"]');
        modalElem.style.display = 'flex';
        let imageModalElem = modalElem.querySelector('.gallery-modal-icon');
        imageModalElem.style.backgroundImage = 'url(../img/' + modalId + '.jpg)';
        overlay.style.display = 'block';
      });
    });

    closeButtons.forEach(function(item) {
        item.addEventListener('click', function(event) {
          event.preventDefault();
          let parentModal = this.closest('.gallery-modal_window');
          parentModal.style.display = 'none';
          overlay.style.display = 'none';
        });
    });
      
    $( function() {
       $( "#tabs" ).tabs({
         show: { effect: "fade", duration: 500 },
         hide: { effect: "fade", duration: 500 }
       })
    });

    $( function() {
      $( ".accordion" ).accordion({
        collapsible: true,
        heightStyle: "content",
        header: "h3",
        active: 0,
      });
    });
        
        
    //let catalogTabsLinks = document.querySelectorAll('.catalog-tabs-link');

    //catalogTabsLinks.forEach(function(item) {
    //  item.addEventListener('click', function(event) {
        //event.preventDefault();
        //let href = this.getAttribute('href');
        //console.log(href);
        //let currentTabs = document.querySelector(href);
        //currentTabs.style.display = 'block';
        //console.log(currentTabs);
        //currentTabs.scrollIntoView({
        //  behavior: 'smooth',
        //  block: 'start'
      //})
    //})
    //})
            
  let accordionLinks = document.querySelectorAll('.tabs-accordion-link');
        
    accordionLinks.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();

        let href = this.getAttribute('href');
        let nameCurrentTabs = href.slice(1, 4);
        let currentTabs = document.querySelector('language-tabs, #tabs-'+ nameCurrentTabs);
        let tabsDescriptionBox = currentTabs.querySelector('.tabs-description-box');

        for (i=0; i <= tabsDescriptionBox.children.length-1; i++) {
          tabsDescriptionBox.children[i].style.display = 'none';
        }
            
        let elemId = tabsDescriptionBox.querySelector(href);
        elemId.style.display = 'block';
        let nameBackgroundImage = href.slice(5);
        let containerBackgroundImage = elemId.querySelector('.tabs-portrait-block');
        containerBackgroundImage.style.backgroundImage = 'url(../img/' + nameBackgroundImage + '.jpg)';
        elemId.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
    })

  })
  
  let galleryText = document.querySelector('.gallery-text');
  let galleryBox = document.querySelector('.gallery-box');
  let gallerySelectBlock = document.querySelector('.gallery-select-block');
  let eventsSwiper;
  let publicationsSwiper;
  let eventsSwiperContainer = document.querySelector('.events-swiper-container');
  let publicationsSwiperContainer = document.querySelector('.publications-swiper-container');
  let publicationsCategoriesBlock = document.querySelector('.publications-categories-block');
  let contactsTotalBlock = document.querySelector('.contacts-total-block');
  let contactsFormBlock = document.querySelector('.contacts-form-block');
  let contactsAddressSubtitle = document.querySelector('.contacts-address-subtitle');
  let contactsAddress = document.querySelector('.contacts-address');
  let contactsFormSubtitle= document.querySelector('.contacts-form-subtitle');

    function reorganizationWidget() {

      if(window.innerWidth > 768) {
        gallerySelectBlock.insertBefore(galleryText, null);    
      }
  
      if(window.innerWidth <= 768) {
        galleryBox.insertBefore(galleryText, null);    
      }

      if (window.innerWidth <= 375 && eventsSwiperContainer.dataset.mobile === 'false') {

        eventsSwiperContainer.dataset.mobile = "true";
    
    
        eventsSwiper = new Swiper('.events-swiper-container', {
          slideClass: 'events-card',
          slidesPerView: 1,
          direction: 'horizontal', 
          loop: true,
          spaceBetween: 0,
          pagination: {
            el: '.events-swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });

        $( function() {
          $(".publications-categories-block").accordion({
            collapsible: true,
            heightStyle: "content",
            header: "h3",
            active: false,
          });
        });

    
        if(publicationsSwiperContainer.classList.contains('swiper-container-initialized')) {
          publicationsSwiper.destroy();
        }

          contactsTotalBlock.insertBefore(contactsAddress, null);
          contactsTotalBlock.insertBefore(contactsAddressSubtitle, null);
  
  } 
        if(window.innerWidth > 375) {

          eventsSwiperContainer.dataset.mobile = "false";
    
        if(eventsSwiperContainer.classList.contains('swiper-container-initialized')) {
          eventsSwiper.destroy();
        }

        publicationsSwiper = new Swiper('.publications-swiper-container', {
          slidesPerView: 1,
          slidesPerGroup: 1,
          direction: 'horizontal',
          loop: true,
          slideClass: 'publications-swiper-slide',
          spaceBetween: 5,
          pagination: {
            el: '.publications-swiper-pagination',
            type: 'fraction',
            clickable: true,
          },
          navigation: {
            nextEl: '.publications-button-next',
            prevEl: '.publications-button-prev',
          },
          breakpoints: {
            1400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            },
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 49,
            },
            590: {
             slidesPerView: 2,
             slidesPerGroup: 2,
             spaceBetween: 34,
            },
          },
        });
    
      if(publicationsCategoriesBlock.classList.contains('ui-accordion')) {
        $(".publications-categories-block").accordion("destroy");
      }

      contactsFormBlock.insertBefore(contactsAddressSubtitle, contactsFormSubtitle);
      contactsFormBlock.insertBefore(contactsAddress, contactsFormSubtitle);
    
  }
}
  reorganizationWidget();
 
  window.addEventListener('resize', () => {
    reorganizationWidget();
  });

  let eventsButton = document.querySelector('.events-button');
  let eventsBlock = document.querySelector('.events-block');

  eventsButton.addEventListener('click', function(event) {
    event.preventDefault();
    for (i=0; i <= eventsBlock.children.length-1; i++) {
      eventsBlock.children[i].style.display = 'block';
    }
    eventsButton.style.display = 'none';
  }) 
   
  let publicationsCategoriesCheckbox = document.querySelectorAll('.publications-categories-checkbox');
  let publicationsCategoriesChosen = document.querySelector('.publications-categories-chosen');
  let closeButton = document.querySelector('.gallery-modal_button');
        
  publicationsCategoriesCheckbox.forEach(function(item) {

    if ( item.checked ) {
      let parentCheckboxChosen = item.closest('.publications-categories-item');
      let cloneParentCheckboxChosen = parentCheckboxChosen.cloneNode(true);
      let cloneCloseButton = closeButton.cloneNode(true);
      cloneCloseButton.classList.remove('js-modal-close');
      cloneCloseButton.classList.add('js-label-close');
      cloneParentCheckboxChosen.append(cloneCloseButton);
      cloneCloseButton.addEventListener ('click', function () {
        cloneParentCheckboxChosen.remove();
        $(item).prop('checked', false);
      });
      publicationsCategoriesChosen.append(cloneParentCheckboxChosen);
      $('.publications-categories-chosen * .publications-categories-checkbox').prop('disabled', true);  
    }

    item.addEventListener('change', function () {
          
      if ( this.checked ) {
              
        let parentCheckboxChosen = this.closest('.publications-categories-item');
        let cloneParentCheckboxChosen = parentCheckboxChosen.cloneNode(true);
        let cloneCloseButton = closeButton.cloneNode(true);
        cloneCloseButton.classList.remove('js-modal-close');
        cloneCloseButton.classList.add('js-label-close');
        cloneParentCheckboxChosen.append(cloneCloseButton);
            
      if(publicationsCategoriesChosen.children.length !== 0) {
        for(let i=0; i <= publicationsCategoriesChosen.children.length-1; i++) {
                   
          if(publicationsCategoriesChosen.children[i].textContent !== cloneParentCheckboxChosen.textContent) {
               
            publicationsCategoriesChosen.append(cloneParentCheckboxChosen);
            $('.publications-categories-chosen * .publications-categories-checkbox').prop('disabled', true);
              
            cloneCloseButton.addEventListener ('click', function () {
              cloneParentCheckboxChosen.remove();
              $(item).prop('checked', false);
            });
          }
          if(publicationsCategoriesChosen.children[i].textContent === cloneParentCheckboxChosen.textContent) {
             return;
          }
        }
      }
          if(publicationsCategoriesChosen.children.length === 0) {

            publicationsCategoriesChosen.append(cloneParentCheckboxChosen);
            $('.publications-categories-chosen * .publications-categories-checkbox').prop('disabled', true);
          
            cloneCloseButton.addEventListener ('click', function () {
              cloneParentCheckboxChosen.remove();
              $(item).prop('checked', false);
            });
        }
      }
          else {
            let parentCheckboxChosen = this.closest('.publications-categories-item');
            let cloneParentCheckboxChosen = parentCheckboxChosen.cloneNode(true);
            let cloneCloseButton = closeButton.cloneNode(true);
            cloneCloseButton.classList.remove('js-modal-close');
            cloneCloseButton.classList.add('js-label-close');
            cloneParentCheckboxChosen.append(cloneCloseButton);

             for(let i=0; i <= publicationsCategoriesChosen.children.length-1; i++) {
        
              if(publicationsCategoriesChosen.children[i].textContent === cloneParentCheckboxChosen.textContent) {
      
                publicationsCategoriesChosen.children[i].remove();
              }
             }
          }
        });
      });
      
  let projectsSwiper = new Swiper('.projects-swiper-container', {
    slideClass: 'projects-swiper-slide',
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'horizontal', 
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
    },
    breakpoints: {
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 50,
      },
      590: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 34,
      },
    },  
});

  ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [55.76008438514039,37.65223459033194],
        zoom: 14
      });
      var myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placeMark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
      });
      myMap.geoObjects.add(myPlacemark);
    }

  var selector = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate('.contacts-form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number (phone) && phone.length === 10
        }
      },
    },
    messages: {
      name: {
        required: 'Укажите ваше имя',
        minLength: 'Имя должно содержать минимум 2 символа',
        maxLength: 'Имя должно содержать не более 30 символов'
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Пожалуйста, введите правильный номер'
      },
    }
  })

});