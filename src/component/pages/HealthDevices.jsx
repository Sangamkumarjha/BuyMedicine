import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'BPL IR-D2',
    price: '₹2,890',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbCRUi6-QHQXSu4Fuv6bC7LKT5Z23c8NsqkxQ_XzH1BDhtyKyaPmLSbCC1JC2wj165kUsja5hXpSh1YBdut3InTC-4xK4znrTRuV3wJGjP1LLo2wNo3q6HXR8WwH90XSSCssM5Av8&usqp=CAc'
  },
  {
    id: 2,
    title: 'BPL 6208 VIEW 3Chanel',
    price: '₹49,603',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWfAPnQ9P1aEfoHXFDMvWlbP5aGonhgI_ae-zXW9FGg24kj4WfXZDFmJn8K8ZVDpsd-zpsIB4z3Xeq6oXg2knynJUBo6uXpQQsohvMiRahgTbwdwVE4k70&usqp=CAc'
  },
  {
    id: 3,
    title: 'Sethoscope',
    price: '₹2,604',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5MOcXuN5ocTA_1ZbOEslLnVNp4WW0pRC7mnYumQOU-d698Epc4hxvaNZNsMrYHh0Skl0897e4cXAHZPoKbvkqdsAmJOJ8K31lnUZrhy-ImWVygL1md8Yw_-p1pmaczVLeCYWYW5M&usqp=CAc'
  },
  {
    id: 4,
    title: 'Neck Back Massager',
    price: '₹89',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpBBb2y21gP5Vo-rvsrVQgVtxwrTfqr_UoVuLoNc4B7th0ZxANhJ6skhfOIwOie9sG3R3FpMEy8CCNz3zSdrpfr72AtXoCLZI9qW6toLrNdXALAoGqGypeJOggcLbh&usqp=CAc'
  },
  {
    id: 5,
    title: 'Digital BloodPressure check',
    price: '₹1,799',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTYeVTKu7W6cKQCJQzXDOVR2iMaaJAWCcjt7zXH81_5avLaAEraabAN4Ra9_67MXHbg9bXBU3bolOHMGr_k58alHbaUcyAM3MePiRdIUWGJ-UoqcmGUvGfKrgGMpeSQNUakh3Dlkc5LcA&usqp=CAc'
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

const HealthDevice= () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Health Device Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Health Device Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best health device items.</p>
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
          <p>&copy; 2024 Health Device Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HealthDevice;
