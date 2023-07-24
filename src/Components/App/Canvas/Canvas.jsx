import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';  
import './Canvas.css'
import './Canvas.js'
import $ from 'jquery';




const Canvas = () => {


  const nodeRef = useRef(null);

  const handleScreenshot = async () => {
    const image = await htmlToImage.toPng(nodeRef.current);
    // you can use this image in any way you want
    console.log(image)
    let file = convertBase64ToFile(image, "image.png");
    saveAs(file, "image.png");
  };
  
  const convertBase64ToFile = (base64String, fileName) => {
    let arr = base64String.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let uint8Array = new Uint8Array(n);
    while (n--) {
       uint8Array[n] = bstr.charCodeAt(n);
    }
    let file = new File([uint8Array], fileName, { type: mime });
    return file;
  }


  return (
    <div>
        <div id="cstmCnvOtrBx">
            <div id="finalImgWrapper" ref={nodeRef}>  
                <div id="cstmCnvInrBx">
                <div id="cstmCnv_imgCont">
                </div>

                <div id="nameBox" className="textBox">
                    <h2 id="forName">K Shankar Saumya</h2>
                </div>
                </div>
            </div>
        </div>

        <button  id="orgDownload" onClick={handleScreenshot}>Take Screenshot</button>





        
    </div>
  )
}

export default Canvas;
