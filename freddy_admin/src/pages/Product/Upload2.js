import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [imagedata, setImagedata] = useState('');
  const handleChange = (file)=>{
    setImagedata(file[0]);
  };
  const submitData = (e) =>{
    e.preventDefault();
    const fData = new FormData();
    fData.append("image",imagedata);
    axios.post('http://127.0.0.1:8000/api/upload',fData)
    .then((res)=>{
      console.log('response',res);
    })
    .catch((e)=>{
        console.log('fail',e);
    });
  }

  return (
    <form onSubmit={submitData}>
<label>Upload</label>
<input type="file" name="" onChange={e=>handleChange(e.target.files)}/>
<button type="submit" onClick={submitData}> Upload</button>

    </form>
  );
}

export default Upload;
