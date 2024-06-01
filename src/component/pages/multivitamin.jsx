import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'Sugerbear',
    price: '₹1,999',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTZR55xiFUXF8i5xy2MlSf-t65VkSzJKYz6JdCi1ZyYcua8twC1UQMp6Rk1Kl-DhyVfQYuLP5MrUW3qHBwKmUy1tNVEPNEPmqCagXuHU7LA3jAplcsSfK5UgdQAg-FZNIpDYkY8gxs&usqp=CAc'
  },
  {
    id: 2,
    title: 'HeakthCart',
    price: '₹499',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZNPnJzCmmzRTBdWgaxlHN70309tqodVy_oEL2sUBeohsISpDV3ZD4hZbTBRN2pn8cmImCqc-pOL9Ykes33KEf_7qzzonIStcLvlgM2MwOrrAZl6nv85OZUAzhYoiELBVHWUgZ6ts&usqp=CAc'
  },
  {
    id: 3,
    title: 'MultiVitamin Gummies',
    price: '₹499',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbo0XrRT1BYKfOxwdzZKN_9uKRxIarnbegsHYSEOGMzdqw4WJ8fIGNgEtDk4c21YzIEFMJcRDZblvHSIjsR-a-vXF_RYu5GcaB4dp57QKMfbqHknJLugZfHiIkvCKZzU_HN0U8HQ&usqp=CAc'
  },
  {
    id: 4,
    title: 'MuscleBlaze',
    price: '₹524',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTm8M9O0FA2DkSj8d5gzFbIZjY6mf-use2bceSNCcSE5SUS9U1_zn_dxEDx10CI-e1uMQzkfdoHYX4NcVS8DPokTymhNo5t6v8Ei0Qitd9FMJynGhoNvWv_0Q&usqp=CAc'
  },
  {
    id: 5,
    title: 'Immunoscience',
    price: '₹1,100',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYT2MUcLj0zMsRpYPuc8xADc-TkztLMZXKq5pEInZwY2lcaWPNfFzLwGN6E26b6A3lYVVZR_dbFZN0A8d-GQio6vnXGiOlZiNt-Cm8hK2wCGz-t9XfxwiddlphnqIeACcggj6btXQ&usqp=CAc'
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

const Multivitamin = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Multivitamin Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Multivitamin Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the multivitamin care items.</p>
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
          <p>&copy; 2024 Multivitamin Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Multivitamin;
