import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "../src/pages/About";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/User";
function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <GithubProvider>
        <AlertProvider>
          <div className="">
            <Navbar />
          </div>

          <Routes>
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/user/:login" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
          <div>
            <Footer />
          </div>
        </AlertProvider>
      </GithubProvider>
    </div>
  );
}

export default App;
