$(function Scroll() {
  $('#buttDiv').click(function()  {
    $('html, body').animate(
      {
        scrollTop:$('#modalScrollTo').offset().top
      },
      3000
    )
  })
})
