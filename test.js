$(function() {
    $("#play").on("click", function() {
      play();
    });
  
    function play() {
      $(".table").data("interval", setInterval(function() {
        var index = 0;
        if ($(".up").length > 0) {
          index = $(".up:last").index() + 1;
        }
        $(".up").removeClass("up");
        $(".table > div")
          .eq(index)
          .add($(".table > div").eq(index + 16))
          .add($(".table > div").eq(index + 32))
          .add($(".table > div").eq(index + 48))
          .add($(".table > div").eq(index + 64))
          .add($(".table > div").eq(index + 80))
          .add($(".table > div").eq(index + 96))
          .addClass("up");
      }, 265));
    }
  
    $("#stop").on("click", function() {
      clearInterval($(".table").data("interval"));
    });
  });




  $(".items").on("click", function(){

    let userChosenDiv = $(this).attr("id");
   
    console.log(userChosenDiv);

    $("#" + userChosenDiv).toggleClass("userClickedButton");

});


$('#btnreset').on("click",function clear() {
    $("#selector01").val( $(this).find("option[selected]").selectedIndex=0 );

    $(".items").removeClass("userClickedButton");
});