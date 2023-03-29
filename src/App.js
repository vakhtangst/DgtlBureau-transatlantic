import Layouts from "components/common/Layouts";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layouts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
