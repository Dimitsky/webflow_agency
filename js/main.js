// js enabled

document.documentElement.classList.add( 'js' );

// swiper-review

try {
  if ( Swiper ) {
    const swiper = new Swiper('.swiper-review', {
      autoHeight: true,
      slideClass: 'swiper-review__slide',
      wrapperClass: 'swiper-review__wrapper',
      navigation: {
        nextEl: '.swiper-review__button--next',
        prevEl: '.swiper-review__button--prev',
        disabledClass: 'swiper-review__button--disabled',
      },
    });
  }
} catch( err ) {
  console.log( 'Swiper is not defined' );
}

// faq-accordion

const accordions = document.querySelectorAll( '.accordion-main .accordion__elem' );

function openAcc( el ) {
  const trigger = el.querySelector( '.accordion__trigger' );
  const content = el.querySelector( '.accordion__content' );

  el.classList.add( 'open' );
  trigger.setAttribute( 'aria-expanded', 'true' );
  content.setAttribute( 'aria-hidden', 'false' );
  content.style.maxHeight = content.scrollHeight + 'px';
}

function closeAcc( el ) {
  const trigger = el.querySelector( '.accordion__trigger' );
  const content = el.querySelector( '.accordion__content' );

  el.classList.remove( 'open' );
  trigger.setAttribute( 'aria-expanded', 'false' );
  content.setAttribute( 'aria-hidden', 'true' );
  content.style.maxHeight = '';
}

function closeAllAcc( accordions ) {
  accordions.forEach( el => {
      closeAcc( el );
  } );
}

accordions.forEach( el => {
  el.addEventListener( 'click', e => {
    const self = e.currentTarget;

    if ( self.classList.contains( 'open' ) ) {
      closeAcc( self );
    } else {
      closeAllAcc( accordions );
      openAcc( self );
    }
  } );

  openAcc( accordions[0] );
} );

// burger

const burger = document.querySelector( '#menu-toggle' );
const menu = document.querySelector( '#menu' );

burger.addEventListener( 'click', e => {
  expanded = e.target.getAttribute( 'aria-expanded' ) == 'false' ? true : false;
  e.target.setAttribute( 'aria-expanded', expanded );
  menu.classList.toggle( 'open' );
} );