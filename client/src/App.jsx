import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLayout from "./admin/AdminLayout";
import HomeDashboard from "./pages/admin/HomeDashboard";
import Members from "./pages/admin/Members";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Gallery from "./pages/Gallery";
import WatchLive from "./pages/WatchLive";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
    // AOS.refresh();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route element={<HomeDashboard />} index />
          <Route element={<Members />} path="members" />

        </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<Homepage />} index />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Vision />} path="/vision" />
          <Route element={<Mission />} path="/mission" />
          <Route element={<WatchLive />} path="/watch-live" />
          <Route element={<AdminLayout />} path="/dashboard" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
