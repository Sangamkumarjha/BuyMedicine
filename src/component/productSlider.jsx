import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'Swisse Beauty Vegan Collagen Builder',
    price: '$10',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg'
  },
  {
    id: 2,
    title: 'Health HK Vitals Dislove With Marine',
    price: '$20',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6433e3a7dfb649e8ba0d81d8a4d1491c.jpg'
  },
  {
    id: 3,
    title: 'Power Gummies for Jaw-Dropping Skin',
    price: '$30',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3ab53077d4c44f3c9fdbc83d5d3948b0.jpg'
  },
  {
    id: 4,
    title: 'Swisse Collagen + Hyaluronic Acid',
    price: '$40',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/e6abfe99bf324feea25a46f383cca8b4.jpg'
  },
  {
    id: 5,
    title: 'Pantanjali Divya Madhunashini Vati',
    price: '$50',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cmrzmaq7uw07cjvvmmxq.jpg'
  },
  {
    id: 6,
    title: 'Garlic Pearls Capsule',
    price: '$60',
    image: 'https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/xfgyllio46ox2tlje8p5.jpg'
  },
  // Add other product data here
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
    slidesToShow: 5, // Adjust the number of products per slide
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
                <h3 className="mt-4 text-lg ">{product.title}</h3>
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

export default ProductSlider;
