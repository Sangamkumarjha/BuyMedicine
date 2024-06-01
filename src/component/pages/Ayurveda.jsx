import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    title: 'Gynoveda Fertility',
    price: '₹4,400',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4N7e4edFwN-u0VG2vchrxsCTf26sgF7IkFYNdnjjyTQ6D-905rVVH1iDi4GJXH-fgv3h7_yy5bZwPXGvqzwwO1VH48hiXZXns8RwUq_3BVrUXuDcf6Tnu3GDgVh2MWoRGmCkspGiIyHI&usqp=CAc'
  },
  {
    id: 2,
    title: 'Choles-terol',
    price: '₹590',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQmdI_exgbhq3YSY_jwihjboAek01vHK7NQt03n4GTk0edyDXyhKVkXmfuvlBzcu7AweZpGQvXoFbIvL3KA9MXbw7g3YUs4k2F_-5lxnTQiA5-UwTiEVitV8q7kfzF1g0IHDUbzXDo&usqp=CAc'
  },
  {
    id: 3,
    title: 'Nveda B Capsules',
    price: '₹395',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFvcKqC6pjpJt8Sdz68jIIRTTHyLjTaFld2MOxOY9drQYp4OY01u7Ri1sbBlIdxeQxtK0bYEtM_KzvvpuA6TpfBoG-s2lrKrTXsr6shMGeHf2pT2yTULA2Jq8zRqt-4MIrh5r-DpA&usqp=CAc'
  },
  {
    id: 4,
    title: 'Ayurvedic Anti Pigmentation',
    price: '₹1900',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQyJ5q6pRwG0BSyko4spXmtiybqd-2XT4VACeChqHPaIn3xDjT41Z7g-aZ7YoGXuhPKzSjz-m9RjCUFhBZYX5vhxzUc8wimt8VjwqB7TBzA0TvfUtlJHKxQOXhJnCjB83mj2SXaqllFNc&usqp=CAc'
  },
  {
    id: 5,
    title: 'Kapiva Dia Free Juice',
    price: '₹1,099',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdRX8enM9c1cUuhucDJ9pT6XPMlaIU7CHY5TcZXZglMK8qA_G9ShXCe8GAgkCC747BbpRchTeih9Yf0paGmYlLR1tlr_UlkmMgMoHwAGkpErdrKyKhxvhlckeulx0qXa-vmkbF5FkAXw&usqp=CAc'
  },
  {
    id: 6,
    title: 'Original AdivasiNeelgiri',
    price: '₹749',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdIYmj_MPsvz3Iaw_se0tOV_vynCN8yZKN9JLG03F28K8kjJtcrmYWIC3i9MgJopwLnmBUEoobFRdCoo3AiFIq_ty0EkPWe6S2ESXmV1z1KLa26MB4sJ96LwLb6Qf9r3rcniUxZ89bKK0&usqp=CAc'
  },
  {
    id: 7,
    title: 'Buy TAC Ayurvedic',
    price: '₹399',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdRX8enM9c1cUuhucDJ9pT6XPMlaIU7CHY5TcZXZglMK8qA_G9ShXCe8GAgkCC747BbpRchTeih9Yf0paGmYlLR1tlr_UlkmMgMoHwAGkpErdrKyKhxvhlckeulx0qXa-vmkbF5FkAXw&usqp=CAc'
  },
  {
    id: 8,
    title: 'Shilajit Gold Dust',
    price: '₹1,099',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5HT3P9tM7jEWiB_9o9fnIhyfeET1NcZ3lSjtd8wt5vQ62F7l9Ca177t4kHViuAhv206BQWkWlxGEN1EdvWPVbZa1J5Hv02lZEZSF0D0MaH8fN2K2u-0Iwo0iV67q0dQjfhraTO6Hl4IU&usqp=CAc'
  },
  {
    id: 9,
    title: 'Ayuvya i-Gain',
    price: '₹749',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKEVQMO7kB9sfQgumRDzxOx7QK_wkCEtApUHwDAgnX4JON9V3GWxVp2BY2wLuEKQgW-cdDeB5c_0MVvNwC8fSD94ZSKuml_YOMqjcolP96dHOkQBNbHxnvGAKsXLK-z9oB3Px4JmaD&usqp=CAc'
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

const Ayurveda = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ayurveda Products</h1>
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
          <h2 className="text-4xl font-bold">Welcome to Ayurveda Products</h2>
          <p className="mt-4 text-lg text-gray-700">Your one-stop shop for the best Ayurveda items.</p>
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
          <p>&copy; 2024 Ayurveda Products. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Ayurveda;
