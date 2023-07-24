import React from 'react'
import { useState } from "react";
import './PersonImg.css'

const PersonImg = () => {



/* User Image Upload */



const [file2, setFile2] = useState();
    function handleChange2(e) {
        console.log(e.target.files);
        setFile2(URL.createObjectURL(e.target.files[0]));

        var imageBG = document.querySelector("#cstmCnv_imgCont"),
		file2 = document.querySelector("#js-imageUpload_person").files[0],
		reader = new FileReader();

	reader.onloadend = function () {
		imageBG.style.backgroundImage = "url(" + reader.result + ")";
	};

	if (file2) reader.readAsDataURL(file2);
	else imageBG.style.backgroundImage = "";
    }
  



  return (
    <div>
              <div className="bgImageCanvas">
            <h2>For Your Image:</h2>
            <div className="UpldWrap">
                <img className="personImage" src={file2} />
                <div>
                <label for="js-imageUpload_person" class="js-imageUpload_person-lab">Upload &nbsp;<i class="fa fa-upload" aria-hidden="true"></i>
</label>
                <input type="file"  id="js-imageUpload_person" accept="image/jpeg, image/png, image/jpg" onChange={handleChange2} />
                </div>
            </div>
        </div>        
  
    </div>
  )
}

export default PersonImg
