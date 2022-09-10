import DrawCanvas from './components/DrawCanvas/DrawCanvas';
import drawSomthing from './Drawing';
function App() {

  return (
    <>
      <DrawCanvas
        style={{ width: '100%', height: '100vh' }}
        draw={drawSomthing}
      />
      <div style={{ position: 'absolute', inset: '1rem' }}>
        <h1 style={{ color: '#ffffff' }}>Canvas + React</h1>
      </div>
    </>
  );
}

export default App;
