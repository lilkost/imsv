// burger header menu
if(document.querySelector('.burger')) {
    let btn = document.querySelector('.burger');
    let nav = document.querySelector('.nav');

    btn.addEventListener('click',()=> {
        btn.classList.toggle('active');
        nav.classList.toggle('open')
    });
}
// drop-down main page
if(document.querySelector('.question__dropdown-item')) {
    let select_item = document.querySelectorAll('.question__dropdown-item');

    for (itm2 of select_item) {
        itm2.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active')
            } else {
                for (el2 of select_item) {
                    el2.classList.remove('active');
                }
                this.classList.add('active');
            }
        });
    };
}
// slider main-page
if(document.querySelector('.news__slider')) {
    
    const newsSlider = new Swiper('.news__slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            
            993: {
              slidesPerView: 3,
            },
            992:{
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1.5,
            },
            481: {
                slidesPerView: 1.5,
            },
            280:{
                slidesPerView: 1,
            }
        }
    });
}
// count ol list
if(document.querySelector('.service-info__ol-list')) {
    let list = document.querySelectorAll('.service-info__ol-list');

    list.forEach(list=> {
        
        for(let i = 0; i < list.querySelectorAll('.service-info__ol-item').length; i++) {
            list.querySelectorAll('.service-info__ol-item')[i].setAttribute('data-count', (i+1)+'.'); 
        }

    })
}
// copy text
if(document.querySelector('.requisites__item')){
    let copyItem = document.querySelectorAll('.requisites__item');
    copyItem.forEach(copyItem=> {
        copyItem.addEventListener('click',()=> {
            let copyText = copyItem.querySelector("textarea");
            let text = copyItem.querySelector("textarea").textContent;
            navigator.clipboard.writeText(text).then(function() {
              console.log('Текст скопирован в буфер обмена');
            }, function(err) {
              console.error('Ошибка при копировании текста: ', err);
            });

        })
    })

}
// mask phone
if(document.querySelector('#phoneMedia')) {
    let phoneInput = document.querySelector("#phoneMedia");
    const phoneMask = new IMask(phoneInput, {
      mask: "+{7}(000)000-00-00",
    });
}
// modal service
if(document.querySelector('.service__item')) {
    let btnOpen = document.querySelectorAll('.service__item');
    let btnCloseModel = document.querySelector('.modal-service__close');
    let model = document.querySelector('.modal-service');
    let div = document.querySelector( '.modal-service');

    btnOpen.forEach(btn=> {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();
            let title = btn.querySelector('.data-title-modal');
            let txt = btn.querySelector('.data-text-modal');
            let linkHref = btn.querySelector('.service__item-link').href;
            
            let modalTitle = model.querySelector('.modal-service__title');
            let modalText = model.querySelector('.modal-service__txt');
            let modalLink = model.querySelector('.modal-service__btn');

            modalTitle.innerHTML = title.innerHTML;
            modalText.innerHTML = txt.innerHTML;
            modalLink.href = linkHref;

            model.classList.add('open');
        });
    })

    btnCloseModel.addEventListener('click', ()=> {
        model.classList.remove('open');
    });

    window.addEventListener('keydown',(e)=> {
        if(e.keyCode == 27 || e.key == 'Escape')  {
            model.classList.remove('open');
        }
    })
}
// modal top 
if(document.querySelector('.top__image-decor')) {
    let btnOpenTop = document.querySelectorAll('.top__link ');
    let btnCloseTop = document.querySelector('.modal-top__close');
    let modalTop = document.querySelector('.modal-top');


    btnOpenTop.forEach(btn=>{
        btn.addEventListener('click', ()=> {
            modalTop.classList.add('open');
        });
    });

    btnCloseTop.addEventListener('click', ()=> {
        modalTop.classList.remove('open');
    })

    window.addEventListener('keydown',(e)=> {
        if(e.keyCode == 27 || e.key == 'Escape')  {
            modalTop.classList.remove('open');
        }
    })
}