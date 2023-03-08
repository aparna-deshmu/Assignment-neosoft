import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Display from "./components/display/Display";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:imageId" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
