import Sidebar from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import SignInSide from "./components/pages/LantingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Birthday from "./components/pages/Birthday";
import Weddings from "./components/pages/Wedding";
import Bachelor from "./components/pages/Bachelor";
import Entertainment from "./components/pages/Entertainment";
import Decoration from "./components/pages/Decoration";
import Catering from "./components/pages/Catering";
import Confirmation from "./components/pages/Confirmation";
import PackageContextProvider from "./components/shared/PackageContext";
import Conform from "./components/pages/Conform";
import About from "./components/pages/About";
import Services from "./components/pages/Service";

function App() {
  return (
    <>
      <PackageContextProvider>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<SignInSide />} />
            <Route path="/admin-dashboard" element={<Sidebar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/birthday-parties" element={<Birthday />} />
            <Route path="/wedding-events" element={<Weddings />} />
            <Route path="/bachelor-party" element={<Bachelor />} />
            <Route path="/entertainments" element={<Entertainment />} />
            <Route path="/decorations" element={<Decoration />} />
            <Route path="/caterings" element={<Catering />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/conform" element={<Conform />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services/>} />
          </Routes>
        </BrowserRouter>
      </PackageContextProvider>
    </>
  );
}

export default App;
