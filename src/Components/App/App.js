import $ from 'jquery';


let bg_img_url="";
$(document).ready(function(){
  $(".preMdTemp-image").click(function(){
    bg_img_url=$(this).attr("src");
    console.log(bg_img_url);
    /*
    bg_img_url='url(' + bg_img_url + ')';
    $("#cstmCnvInrBx").css("background-image", bg_img_url);
    */
    var imageBG2 = document.querySelector("#cstmCnvInrBx");
    imageBG2.style.backgroundImage = 'url("' + bg_img_url + '")';
    
  });
});









