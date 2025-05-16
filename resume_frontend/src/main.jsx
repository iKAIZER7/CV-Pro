// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Correct Import
// import Root from './pages/Root';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import GenerateResume from './pages/GenerateResume';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Navbar from './components/Navbar'; // Assuming you have a Navbar component

// import { Toaster } from 'react-hot-toast'; // Assuming you are using react-hot-toast

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Toaster />
//       <Routes>
//         <Route path="/" element={<Root />}>
//           <Route path="" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="generate-resume" element={<GenerateResume />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GenerateResume from './pages/GenerateResume';
import Login from './pages/Login';
import Register from './pages/Register';
import Resume from './components/Resume'; // ✅ Updated path

import { Toaster } from 'react-hot-toast'; // ✅ Toast notifications

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="generate-resume" element={<GenerateResume />} />
          <Route path="resume" element={<Resume />} /> {/* ✅ Added resume route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
