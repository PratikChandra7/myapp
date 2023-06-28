import React, { useState } from 'react';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState({
    githubrepourl : '',
    branch: '',
    accesstoken: '',
    gitlab: '',
    gitlabrepourl: '',
    gitlabbranch: '',
    replicas: '',
    port: '',
    Entrypointfornodejsapplication: ''
  });

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Read the file data
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileText = event.target.result;
        // Update the text boxes with file data
        const lines = fileText.split('\n');
        setFileData({
          githubrepourl: lines[0],
          branch: lines[1],
          accesstoken: lines[2],
          gitlab : lines[3],
          gitlabrepourl : lines[4],
          gitlabbranch : lines[5],
          replicas : lines[6],
          port : lines[7],
          Entrypointfornodejsapplication : lines[8]
        });
      };
      reader.readAsText(selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <h1>File Upload App</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      <h2>File Data</h2>
      <div>
        <label>githubrepourl:</label>
        <input type="text" value={fileData.githubrepourl} readOnly />
      </div>
      <div>
        <label>branch</label>
        <input type="text" value={fileData.branch} readOnly />
      </div>
      <div>
        <label>accesstoken:</label>
        <input type="text" value={fileData.accesstoken} readOnly />
      </div>
      <div>
        <label>gitlab:</label>
        <input type="text" value={fileData.gitlab} readOnly />
      </div>
      <div>
        <label>gitlabrepourl:</label>
        <input type="text" value={fileData.gitlabrepourl} readOnly />
      </div>
      <div>
        <label>gitlabbranch:</label>
        <input type="text" value={fileData.gitlabbranch} readOnly />
      </div>
      <div>
        <label>replicas:</label>
        <input type="text" value={fileData.replicas} readOnly />
      </div>
      <div>
        <label>port:</label>
        <input type="text" value={fileData.port} readOnly />
      </div>
      <div>
        <label>Entrypointfornodejsapplication:</label>
        <input type="text" value={fileData.Entrypointfornodejsapplication} readOnly />
      </div>
    </div>
  );
};

export default App;
