import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

function App2() {
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
      <div style={{backgroundColor:"red"}} ref={nodeRef}>
        
      </div>
      <button onClick={handleScreenshot}>Take Screenshot</button>
    </div>
  );
}

export default App2;