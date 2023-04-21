
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import { BookProvider } from "./context/BooksContext";

import Page404 from "./page/Page404";
import BookDetail from "./page/BookDetail";
function App() {
  return (
    <BookProvider>
    <Router>

    
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<BookDetail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>


    </Router>
  </BookProvider>
  );
}

export default App;
