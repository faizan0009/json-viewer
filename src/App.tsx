import React, {useState} from 'react';
import './App.css';
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import ace from 'brace';
import "brace/mode/json";
import "brace/theme/github";

function App() {
  const [jsonData, setJson] = useState({ a: "hello" });
  const handleChange = (value: any) => {
    setJson(jsonData);
  };

  return (
    <div className="App">
      <Editor
        value={jsonData}
        onChange={handleChange}
        mode='code'
        ace={ace}
        theme="ace/theme/github"
      />
    </div>
  );
}

export default App;
