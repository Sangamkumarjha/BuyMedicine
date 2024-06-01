import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'Protinex Original',
    price: '₹675',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR538WdpNi5I098ClxfCA_6ugskDOaMWPxVarUVbpmsPOzl3DePj71CQgMz6yxSMHYfHxEAzyMymVQSkPpuqWDlBkmF_6lPIJWaH4bsWdnIEDEHigkz4R7H&usqp=CAE'
  },
  {
    id: 2,
    title: 'Nutri-Mix',
    price: '₹249',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ9203g0wdqD-ZC3248_oVSJVmWTbCNXTdy1OvEvp_JjBD8744EQuU1pnB2KVBMna0r6OxZ-XKG4CURxHWx98omBFAs7kbc6ZVPEBu2mJA&usqp=CAE'
  },
  {
    id: 3,
    title: 'Nutrabay',
    price: '₹999',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRokfr1LOEfKoht7VywBxew-qVMf5M01qm65LHURh23UBNJKVMO7KJaJ8xwUy1Vjj59Lm8HFoWlXooBj_HjCS_hgXL1PvKXXg1iskNgLcA&usqp=CAE'
  },
  {
    id: 4,
    title: 'Nutriol Korean',
    price: '₹179',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR7MD9Ai3Zh-xBAVgT-l39Nzk24KIOzuv2WUnIpwL-DFu_R2lGg9sPjMqs5k9ElDVh0ZucJWINnFczXaWkVocs_Mo1HMT0TdH9lr_AOSyvpmaBh25wRoWaaUw&usqp=CAE'
  },
  {
    id: 5,
    title: 'MuscleBlaze',
    price: '₹525',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVCMTxQSQ92UYnBhYgdLSY38yl4w_p9QCaXQVbwjMdxb60mq9Dl9c_-esersJmc0DR2qLj-xPQ7yTICtUBr1pKJF7SuQ8SFi4-drpf_ejN0uSkxtXsX7bSZQ&usqp=CAE'
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

const Nutritional = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Nutritional Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Nutritional Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best nutritional items.</p>
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
          <p>&copy; 2024 Nutritional Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Nutritional;
