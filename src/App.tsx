import React from 'react';
import DrawCanvas from './comp/DrawCanvas';
import { drawLife } from './DrawLife';
import drawSomthing from './Drawing'
function App() {



  return (
    <>
      <DrawCanvas style={{ width: '100%', height: '100vh' }} draw={drawSomthing} />
      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}>
        <h1 style={{ color: '#ffffff', fontSize: '10rem', textAlign: 'center' }}>ANDY CAO</h1>
      </div>
    </>
  );
}

export default App;
