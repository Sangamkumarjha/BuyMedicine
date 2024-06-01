import React from "react";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <>
      {/*<!-- Component: Four columns even layout --> */}
      <section className="m-auto p-4">
        <h1 className="text-2xl text-center mb-6 font-bold">
          Shop By Category
        </h1>

        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            <Link className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="https://images.apollo247.in/pub/media/catalog/category/apollo_products_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-blue-800 text-center p-2 rounded-md font-semibold">
                JhaJee Product
              </span>
            </Link>
            <Link to="/babycareproduct" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src="https://images.apollo247.in/pub/media/catalog/category/babycare_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-pink-800 text-center p-2 rounded-md font-semibold" >
                Baby Care
              </span>
            </Link>
            <Link to="/summeressential" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              
              <img
                src="https://images.apollo247.in/pub/media/catalog/category/summeressential.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-yellow-800 text-center p-2 rounded-md font-semibold">
                Summer Essentials
              </span>
            </Link>
            <Link to="/personalcare" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/personalcare.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-green-800 text-center p-2 rounded-md font-semibold">
                Personal Care
              </span>
            </Link>
            <Link to="/nutritional" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/health_and_nutrition.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-purple-800 text-center p-2 rounded-md font-semibold">
                Nutritional Drinks & Supplements
              </span>
            </Link>
            <Link to="/skincare" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/skin_care_range.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-teal-800 text-center p-2 rounded-md font-semibold">
                Skin Care
              </span>
            </Link>
            <Link to="/womencare" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/womencare.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-red-800 text-center p-2 rounded-md font-semibold">
                Women Care
              </span>
            </Link>
            <Link to="/protien" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/health_and_nutrition.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-indigo-800 text-center p-2 rounded-md font-semibold">
                Protein Powders & Drinks
              </span>
            </Link>
            <Link to="/multivitamin" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/multi_vitamins.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-gray-800 text-center p-2 rounded-md font-semibold">
                Multivitamins
              </span>
            </Link>
            <Link to="/glucometer" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/glucometer_strips.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-orange-800 text-center p-2 rounded-md font-semibold">
                Glucometers & Test Strips
              </span>
            </Link>
            <Link to="/healthdevice" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/healthdevices.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-yellow-800 text-center p-2 rounded-md font-semibold">
                Health Devices
              </span>
            </Link>
            <Link to="/ayurveda" className="col-span-1 flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img
                src="https://images.apollo247.in/pub/media/catalog/category/ayurveda.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                alt="Product Image"
                width="147"
                height="147"
                loading="lazy"
                fetchpriority="low"
                class="Aj "
              ></img>{" "}
              <span className="text-green-800 text-center p-2 rounded-md font-semibold">
                Ayurveda
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<!-- End Four columns even layout --> */}
    </>
  );
}
