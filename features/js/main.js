const accordionFeature = document.querySelectorAll( '.accordion-feature .accordion__elem' );

accordionFeature.forEach( el => {
  el.addEventListener( 'click', e => {
    const self = e.currentTarget;

    if ( self.classList.contains( 'open' ) ) {
      closeAcc( self );
    } else {
      closeAllAcc( accordionFeature );
      openAcc( self );
    }
  } );

  openAcc( accordionFeature[0] );
} );

