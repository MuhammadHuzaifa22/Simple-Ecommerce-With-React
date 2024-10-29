import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col  items-center text-center md:text-left">
        {/* Hero Title and Subtitle */}
        <div className="md:mr-8 mb-6 md:mb-0">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to CountryData
          </h1>
          <p className="text-lg text-gray-300 text-center">
            Click the below button to go to country page.
          </p>
        </div>

        {/* Hero Button */}
        <div>
        <Link to='/countries' className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400">
  Know 
</Link>

        </div>
      </div>
    </div>
    {/* <div className="bg-gray-900 text-gray-200 p-8 flex flex-col lg:flex-row items-center lg:items-start justify-center">
      
      <div className="flex flex-col items-center lg:items-start lg:w-1/2 p-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Discover the Latest Apple Products
        </h2>
        <p className="text-base lg:text-lg text-gray-300 mb-6">
          Experience the ultimate performance and design of the latest iPhone and iPad. Shop now to enjoy our exclusive offers!
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400">
          Shop Now
        </button>
      </div>

      
      <div className="relative lg:w-1/2 p-4 flex justify-center lg:justify-end mr-[40px]">
        <div className="flex flex-col items-center lg:items-end">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJF8hBZbQ6mZKFrzLw8JvWR87CPY0Sn8jbQ&s"
            alt="iPhone"
            className="w-3/3 lg:w-4/5 mb-6 transition-transform duration-500 hover:scale-105 lg:ml-[60px] rounded-lg"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJF8hBZbQ6mZKFrzLw8JvWR87CPY0Sn8jbQ&s"
            alt="iPad"
            className="w-3/3 lg:w-4/5 transition-transform duration-500 hover:scale-105 lg:mr-[30px] rounded-lg"
          />
        </div>
      </div>
    </div> */}
      
      {/* <div className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Explore Our Apple Products
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-[400px]">
          <img src="https://i.ytimg.com/vi/OEFsVK7A7R0/sddefault.jpg"alt="iPhone" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">iPhone 14 Pro</h3>
              <p className="text-gray-300 mb-4">
                Experience the ultimate performance and advanced features with the latest iPhone 14 Pro.
              </p>
              <button className="btn btn-primary transition ease-in-out duration-300 hover:bg-blue-600 hover:scale-110">
                Learn More
              </button>
            </div>
          </div>

          
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-[400px]">
            <img src="https://i.ytimg.com/vi/OEFsVK7A7R0/sddefault.jpg" alt="iPad" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">iPad Pro</h3>
              <p className="text-gray-300 mb-4">
                Discover the power and versatility of the iPad Pro, perfect for both work and play.
              </p>
              <button className="btn btn-primary transition ease-in-out duration-300 hover:bg-blue-600 hover:scale-110">
                Learn More
              </button>
            </div>
          </div>

          
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-[400px]">
            <img src="https://i.ytimg.com/vi/OEFsVK7A7R0/sddefault.jpg" alt="MacBook" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">MacBook Air</h3>
              <p className="text-gray-300 mb-4">
                Enjoy lightweight design and powerful performance with the new MacBook Air.
              </p>
              <button className="btn btn-primary transition ease-in-out duration-300 hover:bg-blue-600 hover:scale-110">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400">
            Check All
          </button>
        </div>
      </div>
    </div> */}
    {/* <div className="bg-gray-900 text-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-800 rounded-lg shadow-lg p-8">
          
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">
              Limited Time Offer: Save Up to 30%!
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Get amazing discounts on our top Apple products. Hurry, the offer ends soon!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-400">
              Shop Now
            </button>
          </div>

          
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="data:image/jpeg;base64,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" // Replace with actual path
              alt="Special Offer"
              className="w-full h-auto max-w-md rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Home