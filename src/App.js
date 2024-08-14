import axios from "axios";
import "./App.css";

function App() {
  const handleBiometric = async () => {
    await axios.get("http://localhost:5000/apiservice/identification");
  };

  return (
    <div className="App">
      <button onClick={() => handleBiometric()}>BIOMETRIA</button>
    </div>
  );
}

export default App;
