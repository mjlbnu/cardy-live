import "./App.css"
import Auth from "./pages/Auth/Auth";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right:'0'}}></div>
      <div className="blur" style={{top: '36%', left:'-8rem'}}></div>
      <Auth />
    </div>
  );
}

export default App;
