$(document).ready(function(){
  $('.navbar').hide()
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $('.navbar').show()
    }
    else{
      $('.navbar').hide()
    }
  })
})

$(document).ready(function(){
  $('#proceedPayment').click(function(){
    $('#modalCart').modal('toggle')
    $('#modalCheckout').modal('toggle')
  })
})
