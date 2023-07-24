import $ from 'jquery';


const file = document.querySelector("#js-imageUpload")
file.addEventListener("change", function() {
  const reader = new FileReader()
  reader.addEventListener("load", () => {
    document.querySelector("#image").src = reader.result
  })
  reader.readAsDataURL(this.files[0]);
})


/* Upload Background Image */

function updateImage() {
	var imageBG = document.querySelector("#cstmCnvInrBx"),
		file = document.querySelector("#js-imageUpload").files[0],
		reader = new FileReader();

	reader.onloadend = function () {
		imageBG.style.backgroundImage = "url(" + reader.result + ")";
	};

	if (file) reader.readAsDataURL(file);
	else imageBG.style.backgroundImage = "";
}

/* Upload User Image */

function updateImage_user() {
	var imageBG = document.querySelector("#cstmCnv_imgCont"),
		file = document.querySelector("#js-imageUpload_user").files[0],
		reader = new FileReader();

	reader.onloadend = function () {
		imageBG.style.backgroundImage = "url(" + reader.result + ")";
	};

	if (file) reader.readAsDataURL(file);
	else imageBG.style.backgroundImage = "";
}

/* Text Size Slider */


$("#slider").on("input",function () {
        $('#forName').css("font-size", $(this).val() + "px");
});


/* Update name */



  
