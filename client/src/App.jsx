import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLayout from "./admin/AdminLayout";
import HomeDashboard from "./pages/admin/HomeDashboard";
import Members from "./pages/admin/Members";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Mission from "./pages/Mission";
import Vision from "./pages/Vision";
import Gallery from "./pages/Gallery";
import WatchLive from "./pages/WatchLive";
import Preload from "./components/Preload";
import AdminLogin from "./pages/admin/AdminLogin";
import Member from "./pages/admin/Member";
import MediaHeaders from "./pages/admin/MediaHeaders";
import ManageGallery from "./pages/admin/ManageGallery";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=> setLoading(false), 4000)
    
    return () => clearTimeout(timer);
  },[])


  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    // AOS.refresh();
  }, []);

  // if (loading) {
  //   return (
  //     <Preload />
  //   );
  // }

  return (
    <Router>
      <Routes>
        <Route path="/gp-admin" element={<AdminLayout />}>
          <Route element={<AdminLogin />} index />
          <Route path="dashboard" >
            <Route element={<HomeDashboard />} index />
            <Route element={<Members />} path="members" />
            <Route element={<MediaHeaders />} path="media-headers" />
            <Route element={<ManageGallery />} path="manage-gallery" />
            <Route element={<Member />} path="member/:id" />
            <Route element={<Member />} path="member" />
            <Route element={<Member />} path="programmes" />
          </Route>
        </Route>
        <Route path="/" element={<Layout />}>
          <Route element={<Homepage />} index />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Gallery />} path="/gallery" />
          <Route element={<Vision />} path="/vision" />
          <Route element={<Mission />} path="/mission" />
          <Route element={<WatchLive />} path="/watch-live" />
          {/* <Route element={<AdminLayout />} path="/dashboard" /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
