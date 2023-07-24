import React from 'react'
import { useState } from "react";
import './BgUpload.css'


const BgUpload = () => {

/* background image Upload*/ 

const [file, setFile] = useState();
function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));

    var imageBG = document.querySelector("#cstmCnvInrBx"),
    file = document.querySelector("#js-imageUpload").files[0],
    reader = new FileReader();

reader.onloadend = function () {
    imageBG.style.backgroundImage = "url(" + reader.result + ")";
};

if (file) reader.readAsDataURL(file);
else imageBG.style.backgroundImage = "";
}



  return (
    <div>
        <div className="bgImageCanvas">
            <h2>For Background:</h2>
            <div className="UpldWrap">
                <img className="postrBgImg" src={file} />


                <div>
                <label for="js-imageUpload" class="js-imageUpload-lab">Upload &nbsp;<i class="fa fa-upload" aria-hidden="true"></i>
</label>
                <input type="file"  id="js-imageUpload" accept="image/jpeg, image/png, image/jpg" onChange={handleChange} />
                </div>
           
            </div>
        </div>
    </div>
  )
}

export default BgUpload
