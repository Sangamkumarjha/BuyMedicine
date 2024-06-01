import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: "Johnson's Baby",
    price: '₹204.4',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdwSqw2GGHr7z92Zu_nx8tupQ7ryFOemLrLFwHU5P8UlQbHTlXHvnDIljjZwvDL4UxSNvu8zZZW9xCEnmkEYlrdXDuizCcduH0ryufxw7ryO262yiLGDW5lLeQnercPb2JXOp5IK4&usqp=CAc'
  },
  {
    id: 2,
    title: 'Baby Forest',
    price: '₹795',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0sXEJNo25fzKhAhM42PwIBKqbSEX0W6eexdlqKii4HxuWOWGap1Macitc6rSNGnIL-rM9vWRzX9ONL-HYsKL370ogz9IO-wb6A9ULw6k&usqp=CAc'
  },
  {
    id: 3,
    title: 'MamyPoko Pants',
    price: '₹437.28',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS73Nh_pN_-5sDitUa1UBfd2lI_SpDRrMCuAg7Ujq5JlmfGRI9mm4LgPUYmd6r63hE8lNVESfN9oYwf3_wJTjS4Hoi2RADLQjubq8ZZ4bXh95n7GSUT4CMk_qM64dGDvirW70hFF_KH_A&usqp=CAc'
  },
  {
    id: 4,
    title: 'Bath Tub',
    price: '₹1,599',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9jAkQEkt2lYipqR_bp-b9VL9z_tq4Sc60eWrrZl74eRCPeGVuiJ0UQNFDtBIMeXKOc3EFVTbMBYeIe9u0uV_8ofKs-GYK7VBrnrZehZO6VnkJSt4PipmG0FlpomR-3fAm9ieiJ1XGgw&usqp=CAc'
  },
  {
    id: 5,
    title: 'Skip Hop Baby Soap',
    price: '₹1,759',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUFR1V_GB4fR0UKEQC06nzaZPHbC-ejqrTSc1FXS_6iYMEPX-Bk-YTwmkal2_xDla6qmg8o0VjWOcbWAEj8uygmLXUz8lO7PjJslHv75yIyFEJxN337MuMF72jy2SUHAn7YdmU5A&usqp=CAc'
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

const WomenCare = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Women Care Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Women Care Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best women care items.</p>
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
          <p>&copy; 2024 Women Care Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default WomenCare;
