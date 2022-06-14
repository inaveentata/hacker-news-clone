import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  Home,
  NewNews,
  PastNews,
  Comments,
  Ask,
  Show,
  Jobs,
  Login_Submit,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="newest" element={<NewNews />} />
          <Route path="front" element={<PastNews />} />
          <Route path="newcomments" element={<Comments />} />
          <Route path="ask" element={<Ask />} />
          <Route path="show" element={<Show />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="submit" element={<Login_Submit />} />
          <Route path="login" element={<Login_Submit />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
