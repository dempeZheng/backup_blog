$(document).ready(function(){
  var $avatar = $('.info-avatar');

  function switchScreen() {
    $('.logo-svg').toggleClass('switch');
    $('.logo-container').toggleClass('switch');
  }
  
  $avatar.on('click', switchScreen);

  console.log('© DempeZheng 🙋 2016-' + (new Date()).getFullYear());
  
});