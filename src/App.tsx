import './App.scss'
import QRCode from 'react-qr-code'
import { useState } from 'react'
import QRCodeLink from 'qrcode'

const App = () => {

  const [ info, setInfo ] = useState('');
  const [ qrCodeLink, setQrCodeLink ] = useState('');

  const handleGenerateQRCodeImage = (url : string) => {
    QRCodeLink.toDataURL(url, (err, url) => {
      setQrCodeLink(url);
    });
  }

  const handleInfo = ( value : string ) => {
    setInfo(value);
    handleGenerateQRCodeImage(value);
  }

  return (
        <div className='App'>
          <div className='header'>
            <h1>QR Code Generator</h1>
          </div>  
          <div className='Box'>
              <QRCode className='QR' value={info} />
              <input 
                    onChange={ (e) => handleInfo(e.target.value) } 
                    placeholder='Digite aqui...'
              />
          </div>
          {
            info && 
            <a className='Download' href={qrCodeLink} download='latestQRCode.png'>Download QRCode</a>
          }
        </div>
  )
}

export default App
