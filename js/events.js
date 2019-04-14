console.log('i am here')

function getIt() {
  $('p').on('click', function() { alert('Hey!') })
}
$(document).ready(function() {


  function frameIt() {
    $('img').on('load', function(e) {
      e.target[class] = 'tasty'
    })
  }
});
