$(document).ready(function () {
  var zoom = 1;
  $(".zoomIn").click(function () {
    if (zoom < 10) {

      zoom += 0.5;
      $("#bagImageZoom").css("transform", "scale(" + zoom + ")");
    }
    
    if(zoom > 9.5){
      $(".fa-plus").css("color","grey");
    }
    if(zoom > 1){
      $(".fa-minus").css("color","black");
    }
    
  });
  
  $(".zoomOut").click(function () {
    if (zoom > 1) {
      zoom  -= 0.5;
      $("#bagImageZoom").css("transform", "scale(" + zoom + ")");
    }
    if(zoom < 9.5){
      $(".fa-plus").css("color","black");
    }
    if(zoom < 1.5 ){
      $(".fa-minus").css("color","grey");
    }
    
  });
});
