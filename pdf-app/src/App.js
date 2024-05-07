import './App.css';
import { Upload, Button, message } from 'antd';
import { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState(undefined);

  useEffect(() => {
    if (file) {
      submitFile();
    }
  }, [file]);

  const submitFile = async () => {
    const formData = new FormData();
    formData.append('file', file);

    await fetch('http://localhost:3001/pdf', {
      method: 'POST',
      body: formData
    });
  };

  const onBeforeUpdate = (file) => setFile(file);

  return (
    <div className="App">
      <Upload beforeUpload={onBeforeUpdate}>
        <Button>Click to Upload</Button>
      </Upload>
    </div>
  );
}

export default App;
