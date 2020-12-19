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
      document.querySelector('#realism').addEventListener('click', function() {
        let a = document.querySelector('.realism');
        if (a.style.display==='none') { 
        a.style.display ='block';
        }
        else {
          a.style.display = 'none';
        }
      });
      document.querySelector('#impressionism').addEventListener('click', function() {
        let b = document.querySelector('.impressionism');
        if (b.style.display==='none') { 
        b.style.display ='block';
        }
        else {
          b.style.display = 'none';
        }
      });
      document.querySelector('#post-impressionism').addEventListener('click', function() {
        let c = document.querySelector('.post-impressionism');
        if (c.style.display==='none') { 
        c.style.display ='block';
        }
        else {
          c.style.display = 'none';
        }
      });
      document.querySelector('#vanguard').addEventListener('click', function() {
        let d = document.querySelector('.vanguard');
        if (d.style.display==='none') { 
        d.style.display ='block';
        }
        else {
          d.style.display = 'none';
        }
      });
      document.querySelector('#futurism').addEventListener('click', function() {
        let e = document.querySelector('.futurism');
        if (e.style.display==='none') { 
        e.style.display ='block';
        }
        else {
          e.style.display = 'none';
        }
      });
      document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
      })
      document.querySelector('#close').addEventListener('click', function() {
      document.querySelector('#menu').classList.remove('is-active')
      })
  })