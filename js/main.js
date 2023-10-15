$(document).ready(function () {
  $("div.info").hide();
  $(".button-1").css("color", "black");
  $(".button-2").css("color", "#999999");
  $(".button-3").css("color", "#999999");
  $("div.video").hide();

  $(".button-1").click(function () {
    $("div.interactive").show("slow");
    $(".button-1").css("color", "black");
    $(".button-2").css("color", "#999999");
    $(".button-3").css("color", "#999999");
    $("div.info").hide("slow");
    $("div.video").hide("slow");
  });

  $(".button-2").click(function () {
    $("div.interactive").hide("slow");
    $(".button-1").css("color", "#999999");
    $(".button-2").css("color", "black");
    $(".button-3").css("color", "#999999");
    $("div.info").show("slow");
    $("div.video").hide("slow");
  });

  $(".button-3").click(function () {
    $("div.interactive").hide("slow");
    $(".button-1").css("color", "#999999");
    $(".button-2").css("color", "#999999");
    $(".button-3").css("color", "black");
    $("div.info").hide("slow");
    $("div.video").show("slow");
  });
});
