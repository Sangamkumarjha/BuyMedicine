import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'VWash Plus',
    price: '₹150',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhgQ1V8C71y5ZSNidvUaOI-hYos90FA7StFrySl-CCXkvrjy5nDjWLHODS0N9oSmmbDQOLr4RDDh2tyMrt1ggt8wPwkHeBDnhItEF2ZO8yB9jlUfVPgrGYFg&usqp=CAE'
  },
  {
    id: 2,
    title: 'Cetaphil',
    price: '₹944',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8w5CVDYktwBHG6se-nefnd0DCZMLlYbt60-MDPjwZJfwVPKLExXZCqKLpOBzfDq8iOKtHS1iJb3RL1m5U_KAgLpzF9ek83xfiXxXRiqfXxn4tLRQFVVbC&usqp=CAE'
  },
  {
    id: 3,
    title: 'Minimal Anti-AceneKit',
    price: '₹1,091',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBFwP7UV1SQksBOBrtranCgZl1VKHZ6FMj2rX_aWHR5OR2mYFJfSxAMB9fERBg9s2aaHFSagvm0FpkBn3JnF9L9-PeW-bcqa_c-nxkWRR-snfA8dz3TTGQVA&usqp=CAE'
  },
  {
    id: 4,
    title: 'Pilgrim',
    price: '₹1,000',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIkK-UvRi86YH05HzPIRjbHtzkPmIIv5NgXtEMa0u31TLO1dvByKHosh22CQ8j1E4M3L8R3vyQRcFegcbmfOX3mYbecEhHZH-vFRbQE2mOWMVCPhxzhslMoA&usqp=CAE'
  },
  {
    id: 5,
    title: 'Provalo',
    price: '₹1,123',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKdBRQt4qmN5L3wAln2RCCYpe-QTIleIT9Uov97Iy5xAtxhAfdQKG1XuircDi9HR73wi4n_JYfyMwTGtp0qti_uO1VyteFL3ObDJT7Ik0c&usqp=CAE'
  },
  // Add more products as needed
];

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
      onClick={onClick}
    >
      &rarr;
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 z-10"
      onClick={onClick}
    >
      &larr;
    </div>
  );
};

const ProductSlider = ({addToCart}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative max-w-6xl mx-auto mt-10">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="p-4">
            <div className="bg-white p-6 h-full w-full rounded-lg shadow-lg text-center flex flex-col justify-between">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover mx-auto"
              />
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.price}</p>
              </div>
              <button
              onClick={()=>addToCart(product)} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const PersonalCare = () => {
  const [cart,setCart]=useState([]);
  const addToCart=(product)=>{
    setCart([...cart,product]);
  }
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Personal Care Products</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto my-8">
        <section id="home" className="my-16 text-center">
          <h2 className="text-4xl font-bold">Welcome to Personal Care Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best personal care items.</p>
        </section>

        <section id="products" className="my-16">
          <h2 className="text-3xl font-bold text-center">Our Products</h2>
          <ProductSlider />
        </section>

        <section id="contact" className="my-16 text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-700">Have any questions? Feel free to reach out!</p>
          <p className="mt-2 text-lg text-gray-700">Email: support@jhajee.com</p>
          <p className="mt-2 text-lg text-gray-700">Phone: (123) 456-7890</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Personal Care Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PersonalCare;
