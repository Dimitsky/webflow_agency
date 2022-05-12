const accordionPricing = document.querySelectorAll( '.accordion-pricing .accordion__elem' );

accordionPricing.forEach( el => {
  el.addEventListener( 'click', e => {
    const self = e.currentTarget;

    if ( self.classList.contains( 'open' ) ) {
      closeAcc( self );
    } else {
      closeAllAcc( accordionPricing );
      openAcc( self );
    }
  } );

  openAcc( accordionPricing[0] );
} );