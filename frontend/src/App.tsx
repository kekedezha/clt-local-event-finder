import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="p-4 bg-white shadow">
          <h1 className="text-2xl font-bold text-center text-primary">
            Local Event Finder
          </h1>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
