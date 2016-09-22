$(document).ready(function(){
  console.log("Jquery has loaded");
  $("#project-tabs").tabs();

  $(".refresh-tab").click(function(){
    console.log("refresh");
    $(".refresh").attr("src", "https://leosooter.github.io/Natural-Selection/");
  });
});
