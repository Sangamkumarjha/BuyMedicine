import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/products.jsx";
import BabyCareProduct from "./component/pages/babyCareProduct.jsx";
import SummerEssential from "./component/pages/summerEssential.jsx";
import Ayurveda from "./component/pages/Ayurveda.jsx";
import Glucometer from "./component/pages/Glucometer.jsx";
import HealthDevice from "./component/pages/HealthDevices.jsx";
import Multivitamin from "./component/pages/multivitamin.jsx";
import Nutritional from "./component/pages/Nutritional.jsx";
import PersonalCare from "./component/pages/PersonalCare.jsx";
import Protien from "./component/pages/protein.jsx";
import SkinCare from "./component/pages/SkinCare.jsx";
import WomenCare from "./component/pages/WomenCare.jsx";
import Modal from "./component/Cart/CartModal.jsx";
import Cart from "./component/Cart/cart.jsx";

const BuyMedicine = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/babycareproduct" element={<BabyCareProduct />} />
          <Route path="/summeressential" element={<SummerEssential />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/glucometer" element={<Glucometer />} />
          <Route path="/healthdevice" element={<HealthDevice />} />
          <Route path="/multivitamin" element={<Multivitamin />} />
          <Route path="/nutritional" element={<Nutritional />} />
          <Route path="/personalcare" element={<PersonalCare />} />
          <Route path="/protien" element={<Protien />} />
          <Route path="/skincare" element={<SkinCare />} />
          <Route path="/womencare" element={<WomenCare />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default BuyMedicine;
