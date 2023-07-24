import React from 'react'

const FontSize = () => {


    /* IMAGE SIZE SLIDER */
    $(document).ready(function(){
        $("#slider").on("input",function () {
                $('#forName').css("font-size", $(this).val() + "px");
        });
    });
    


  return (
    <div>
        <div class="container">
        Font Size
        <input class="none" type="range" min="0" max="100" value="0" id="slider" step="1" />
        </div>
    </div>
  )
}

export default FontSize
