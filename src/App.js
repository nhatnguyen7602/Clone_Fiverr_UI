import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./HOC/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Đây là phần demo thui ^^. Đừng xoá nha
          <Route element={<Layout Component={...}/>} />
           */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
