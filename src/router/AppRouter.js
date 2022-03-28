// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import Home from "../components/home/Home";
// import About from "../components/about/About";
// import Details from "../components/details/Details";
// import Login from "../components/login/Login";

// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" exact element={<About />} />
//           <Route path="/details" exact element={<Details />} />
//           <Route path="/login" exact element={<Login />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
