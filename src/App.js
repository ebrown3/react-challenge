import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LogosPage } from './components/logos-page';

// Questions:
// 1. Load data from local file (path: “https://ac.aws.citizennet.com/assets/qspreviews/qs_interview_data.json”)
// 2. Use the screenshot as an example, implement a generic function for reading any JSON file in that format, then display the top 12 brands based on audience_size. We always want to have 4 items in one row.
// 3. Add a hover state with a dark, semi-transparent overlay and display the ID of the hovered brand.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogosPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
