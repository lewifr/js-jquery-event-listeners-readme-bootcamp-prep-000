
$(document).ready(function() {
  function getIt() {
    $('p').on('click', function() { alert('Hey!') })
  }

  function frameIt() {
    $('img').on('load', function(e) {
      e.target[class] = 'tasty'
    })
  }
});
