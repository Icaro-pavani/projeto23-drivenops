import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListStudentPage from "./ListStudentsPage";
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/all" element={<ListStudentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
