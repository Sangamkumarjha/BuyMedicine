import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'Dr. Morepen',
    price: '₹471',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFDxq7B0jneu5Y6yXHEdT2XruQWCFrG9sl-yqSTbqkcyHVVd38e71B3aKHjjtwsqNpyCqn4sHPfVFgI9cHA4DLloUB027vjtuYE7egZINEBkrP28R5cfgHda8QkWiBMQ-BGzrqomQMw-w&usqp=CAc'
  },
  {
    id: 2,
    title: 'Dr. Trust',
    price: '₹1,999',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQYroXv--WgQna3t5d_fJVFxqqhLl6fWu98hie7BhuqgwVNuWpPzB5O-VhU7QRO0IUGFwTvaZldGNdqx9Mw_V-CkbHGfaT5W-Lqn6XFPtCR7G4RR2Qd-xcrK0LneYAMN6Dwg-iCR4fF1g&usqp=CAc'
  },
  {
    id: 3,
    title: 'BAccu-Check',
    price: '₹744',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSd3sxL2naM9BBoqroTHGpP4DgkcX7hE9Fztp3HCPHt4rY_tID0MjECqwKbS6hBLrLe9Vhl7xyploTeB0WF4cEB50v9ACeoqoJ7K_BpANkES3wcNVAuh2Ogc3O8mYDeGFVTs3ouF0yDcw&usqp=CAc'
  },
  {
    id: 4,
    title: 'AGARO Blood Glucose',
    price: '₹775',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQYHKQNftZ31GjK44BJNiIlNwKJ_z5Yn6uSHZdQiHMeSYZXhh1V30dNL_HIQINZGiEJCV2F4sxMGX6akdBBl-azumwPvY9EcQ8GQynGmWcKwYgF5EfDAXiP8mV1uOlC-LvHbg50dW6WgQ&usqp=CAc'
  },
  {
    id: 5,
    title: 'Instant Digital Glucose',
    price: '₹435',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzgqBH4McIdlRNvrLXoxqf08-CkRmNBSb952xFJwUOAaD-GQhBR4ym53wFwgmDEUYQ7EcGI5v3xC6byVmJds-aRmmuLYzN5ICNwUo_svIqjqW3iEoDTMjoVcuNp6V1JTJFU7rmPDs_pg&usqp=CAc'
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

const ProductSlider = () => {
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
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const Glucometer = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Glucometer Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Glucometer Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best Glucometer items.</p>
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
          <p>&copy; 2024 Glucometer Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Glucometer;
