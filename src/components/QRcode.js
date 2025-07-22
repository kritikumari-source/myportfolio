import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function App(props) {
  const [text, setText] = useState("");
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = () => {
    if (text.trim() !== "") {
      setShowQR(true);
      setText(" ");
    } else {
     
      setShowQR(false);
    }
  };

  return (
    <div style={{ padding: "2rem",height: "800px", textAlign: "center", backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate QR
      </button>

      {showQR && (
        <div style={{ marginTop: "2rem" , backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <QRCodeCanvas value={text} size={256} />
        </div>
      )}
    </div>
  );
}

export default App;


