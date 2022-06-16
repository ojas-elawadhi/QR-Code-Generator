import QRCode from 'qrcode'
import { useState } from 'react'


function App() {
  const [url, setUrl] = useState('')
  const [qr, setQr] = useState('')

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {
      width:800,
      margin:2
    }, (err, url) => {
      if(err) return console.error(err)

      console.log(url)
      setQr(url)
    })
  }
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt)=> setUrl(evt.target.value)}
      />
      <button onClick = {GenerateQRCode}> Generate</button>
      {qr && <>
				<img src={qr} alt="ERROR" />
				<a href={qr} download="qrcode.png">Download</a>
			</>}
    </div>
  );
}

export default App;
