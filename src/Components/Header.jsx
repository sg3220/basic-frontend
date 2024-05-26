import React, { useRef, useState } from 'react';
import '../App.css';

const Header = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      console.log('Selected file:', file.name);

      // Is Mein Formdata Banake File Bhejte Hai
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('Shaurya-PDF-Endpoint', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <header className="Header">
      <div className="left">
        <img
          className="logoImage"
          src="https://res.cloudinary.com/djywrhroe/image/upload/v1716726599/Shaurya-Frontend/LogoPNG2_g0nvky.png"
          alt=""
        />
      </div>
      <div className="right">
        <div className={`fileContainer ${fileName ? '' : 'hidden'}`}>
          <div className="fileLogo">
            <span className="fileImage material-symbols-outlined">draft</span>
          </div>
          <div className="heading02">&nbsp; {fileName}</div>
        </div>

        <div className="buttonContainer">
          <span className="material-symbols-outlined">add_circle</span>
          <button className="customInputButton" onClick={handleFileButtonClick}>
            Upload PDF
          </button>
          <input
            type="file"
            id="defaultInputButton"
            className="defaultInputButton"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
