import React from 'react'
import $ from 'jquery';
import './GetImage.css'


const GetImage = () => {

function test() {
    $( "#orgDownload" ).click();
}

  return (
    <div>
      <button className="downldBtn" onClick={test}>Download Now! &nbsp;<i class="fa fa-cloud-download" aria-hidden="true"></i>
</button>



    </div>
  )
}

export default GetImage
