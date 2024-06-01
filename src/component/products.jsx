import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarTopBar from "./navbarMedicine";
import Footer from "./FooterMedicine";
import CarouselIndicators from "./Slider";
import Category from "./category";
import ProductSlider from "./productSlider";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        console.log(data); // Log the response data
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // if (!Array.isArray(products)) {
  //     return <div>Loading...</div>;
  // }

  return (
    <div className="">
      <NavbarTopBar />
      <CarouselIndicators />
      <Category />
      <ProductSlider />

      {/* <h1>Products</h1>
            <div className="products">
                {products.map((product) => (
                    <div key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div> */}

      <Footer />
    </div>
  );
};

export default Products;
