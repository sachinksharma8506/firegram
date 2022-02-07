import React, { useState } from "react";
import ProgressBar from "./progressbar";
const Upload = () => {
    const [file, setFileName] = useState(null);
    const [error, setError] = useState(null);
    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    const OnfileUpload = (e) => {
        console.log(e)
        const Selectedfile = e.target.files[0];
        if(allowedTypes.includes(Selectedfile.type)) {
            setFileName(Selectedfile);
            setError(null);
        }
        else {
            setFileName(null);
            setError('File type is not valid')
        }
        
        console.log('Changed');
    }
    return (
        <form>
            <label>
            <input type="file" onChange={OnfileUpload}></input>
            <span>+</span>
            </label>
            
            <div className="output">
              {file &&  <div className="file-name">{file.name}</div>}
              {error && <div className="error">{error}</div>}
              {file && <ProgressBar file={file} setFile= {setFileName}></ProgressBar>}
            </div>
        </form>
    )
}

export default Upload;