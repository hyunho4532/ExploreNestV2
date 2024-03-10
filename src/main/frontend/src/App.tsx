import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectWrite from "./view/ProjectWrite.tsx";
import Main from "./view/main/Main.tsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/project/main" element={Main()}></Route>
              <Route path="/project/write" element={ProjectWrite()}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
