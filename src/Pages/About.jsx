import React from 'react';
import img1 from '../assets/Images/profile image.png';

const About = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            About AppleNest
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover the passion behind our innovative Apple products and our commitment to delivering excellence.
          </p>
        </div>
      </section>

      {/* About Information */}
      <section className="py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Personal Information */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-300">
              Hello! I'm Huzaifa Furqan, the founder of AppleNest. With a passion for technology and innovation, I've dedicated myself to creating top-tier Apple products that blend performance with elegance. My journey began with a vision to bring the best of Apple's ecosystem to enthusiasts and professionals alike.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              At AppleNest, we pride ourselves on our commitment to quality and customer satisfaction. Our products are crafted with precision and care to ensure that you get the best experience possible.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
           src={img1}
              alt="Founder"
              className="w-[300px] h-[300px] rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://example.com/product1.jpg" // Replace with your actual product image URL
                alt="Product 1"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                iPhone Pro
              </h3>
              <p className="text-gray-300">
                The iPhone Pro combines cutting-edge technology with sleek design, offering an unparalleled user experience.
              </p>
            </div>
            {/* Product 2 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://example.com/product2.jpg" // Replace with your actual product image URL
                alt="Product 2"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                iPad Air
              </h3>
              <p className="text-gray-300">
                The iPad Air is designed for versatility and performance, making it perfect for both work and play.
              </p>
            </div>
            {/* Product 3 */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <img
                src="https://example.com/product3.jpg" // Replace with your actual product image URL
                alt="Product 3"
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                MacBook Pro
              </h3>
              <p className="text-gray-300">
                The MacBook Pro is a powerhouse laptop designed for professionals who need top-notch performance and reliability.
              </p>
            </div>
          </div>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400">
            Check All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
