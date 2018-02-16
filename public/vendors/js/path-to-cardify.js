
$.fn.cardify = function() {
  const objectImg = this.find('img'); // busca todas las etiquetas img los almacena en un objeto
  const array = Array.from(objectImg); // lo convierte a un array
  array.forEach(function(element) { // recorre todos los elementos
    $(element).wrap('<figure></figure>'); // a las etiquetas los incluye dentro del figure

    $(element).mouseover((event) => { // le asigna el evnto mouseover a cada etiqueta img
      $(event.target).css({
        'filter': 'grayscale(100%)', // blanco y negro
      });
      $(event.target).after('<figcaption>' + $(event.target).attr('alt') + '</figcaption>'); // añade la etiqueta figcaption
      $('figcaption').css({
        'position': 'absolute',
        'bottom': '50%',
        'left': '50%',
        'transform': 'translateX(-50%)',
        'color': 'white',
        'font-size': '20px',
        'font-weight': '400',
        'letter-spacing': '2px',
        'text-shadow': '-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000',
      });
    });

    $(element).mouseout((event) => { // asigana el evento mouseout a cada elemento
      $(event.target).css({
        'filter': 'grayscale(0%)',
      });
      $(event.target).next().remove(); // remueve la etiqueta figcaption
    });
  });
};