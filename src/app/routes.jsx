import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../Pages/Home";
import PetDetails from "../components/PetDetails/PetDetails";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/details/:id" element={<PetDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default routes;
