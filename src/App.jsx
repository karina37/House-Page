import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import House from "./pages/House";
import Wilson from "./pages/Wilson";
import Cuddy from "./pages/Cuddy";
import Chase from "./pages/Chase";
import Foreman from "./pages/Foreman";
import Cameron from "./pages/Cameron";
import "./App.css";

// Екранування спецсимволів
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Компонент підсвітки тексту
const HighlightText = ({ text, highlight }) => {
  if (!highlight || highlight.trim() === "") return <>{text}</>;

  const escapedHighlight = escapeRegExp(highlight);
  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
};

// Пошук
function SearchForm({ currentPath, searchTerms, setSearchTerms }) {
  const [inputValue, setInputValue] = React.useState(searchTerms[currentPath] || "");

  React.useEffect(() => {
    setInputValue(searchTerms[currentPath] || "");
  }, [currentPath, searchTerms]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerms((prev) => ({
      ...prev,
      [currentPath]: inputValue,
    }));
  };

  const handleClear = () => {
    setInputValue("");
    setSearchTerms((prev) => ({
      ...prev,
      [currentPath]: "",
    }));
  };

  return (
    <form className="d-flex position-relative" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Пошук"
        aria-label="Search"
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <button
          type="button"
          onClick={handleClear}
          style={{
            position: "absolute",
            right: "90px",
            top: "50%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#0dcaf0", 
            padding: 0,
            lineHeight: 1,
          }}
          aria-label="Очистити пошук"
        >
          &times;
        </button>
      )}
      <button className="btn btn-outline-info" type="submit">
        Пошук
      </button>
    </form>
  );
}

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [searchTerms, setSearchTerms] = useState({});

  const getSearchTerm = (path) => searchTerms[path] || "";

  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollToTop />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand site-title">Доктор Хаус</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link to="/" className="nav-link-clean">Головна</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/characters" className="nav-link-clean">Персонажі</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/quiz" className="nav-link-clean">Хто ти з Доктора Хауса?</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/contact" className="nav-link-clean">Контакти</Link>
              </li>
            </ul>

            <SearchForm
              currentPath={currentPath}
              searchTerms={searchTerms}
              setSearchTerms={setSearchTerms}
            />
          </div>
        </div>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home searchTerm={getSearchTerm("/")} HighlightText={HighlightText} />} />
          <Route path="/characters" element={<Characters searchTerm={getSearchTerm("/characters")} HighlightText={HighlightText} />} />
          <Route path="/quiz" element={<Quiz searchTerm={getSearchTerm("/quiz")} HighlightText={HighlightText} />} />
          <Route path="/contact" element={<Contact searchTerm={getSearchTerm("/contact")} HighlightText={HighlightText} />} />
          <Route path="/house" element={<House searchTerm={getSearchTerm("/house")} HighlightText={HighlightText} />} />
          <Route path="/wilson" element={<Wilson searchTerm={getSearchTerm("/wilson")} HighlightText={HighlightText} />} />
          <Route path="/cuddy" element={<Cuddy searchTerm={getSearchTerm("/cuddy")} HighlightText={HighlightText} />} />
          <Route path="/chase" element={<Chase searchTerm={getSearchTerm("/chase")} HighlightText={HighlightText} />} />
          <Route path="/foreman" element={<Foreman searchTerm={getSearchTerm("/foreman")} HighlightText={HighlightText} />} />
          <Route path="/cameron" element={<Cameron searchTerm={getSearchTerm("/cameron")} HighlightText={HighlightText} />} />
          <Route path="*" element={<NotFound searchTerm={getSearchTerm("*")} HighlightText={HighlightText} />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

