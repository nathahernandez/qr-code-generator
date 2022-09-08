import './App.scss'
import QRCode from 'react-qr-code'
import { useState } from 'react'

const App = () => {

  const [ info, setInfo ] = useState('');

  const handleInfo = ( value : string ) => {
    setInfo(value);
  }

  return (
    <div className="App">
      
      <div>
          <QRCode value={info} />
          <input 
                onChange={ (e) => handleInfo(e.target.value) } 
                placeholder='Digite aqui...'
          />    
      </div>

    </div>
  )
}

export default App
