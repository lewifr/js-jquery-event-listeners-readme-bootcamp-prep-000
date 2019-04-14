

function getIt() {
  $('p').on('click', function() { alert('Hey!') })
}

function frameIt() {
  $('img').on('load', function(e) {
    e.target.className = 'tasty'
  })
}

function pressIt() {
  $('input').on('keydown', (e) => (if (key.which === 71) alert('g was pressed')))
}

$(document).ready(function() {
});
