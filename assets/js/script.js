const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$( "#enviarmensaje" ).on( "click", function() {
  alert( "El correo fue enviado correctamente...." );
} );

var titulo_1 = $( "#preparacion" ).first();
titulo_1.on( "dblclick", function() {
  titulo_1.toggleClass( "subraya_1_color" );
} );

var titulo_2 = $( "#ingredientes" ).first();
titulo_2.on( "dblclick", function() {
  titulo_2.toggleClass( "subraya_2_color" );
} );

$(".Titulos_cartas").click(function () {
  $(".contenedor_cartas p").toggle();
});

