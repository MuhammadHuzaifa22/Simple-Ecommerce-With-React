import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section: Copyright */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Center Section: Email */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          Contact: <a href="mailto:huzaifafurqan22@gmail.com" className="text-blue-400 hover:text-blue-300 transition duration-300">huzaifafurqan22@gmail.com</a>
        </p>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <svg className="w-6 h-6 text-gray-300 hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.225 0H1.775C.796 0 0 .796 0 1.775v20.45C0 23.204.796 24 1.775 24H22.225c.979 0 1.775-.796 1.775-1.775V1.775C24 .796 23.204 0 22.225 0zM7.037 20.452H4.396V9.122h2.641v11.33zM5.707 7.446a1.526 1.526 0 01-1.526-1.527 1.527 1.527 0 113.055 0 1.526 1.526 0 01-1.527 1.527zm12.368 13.006h-2.641v-6.147c0-1.462-.052-3.339-2.03-3.339-2.035 0-2.35 1.59-2.35 3.23v6.255h-2.64V9.122h2.539v1.553h.036c.354-.67 1.219-1.374 2.51-1.374 2.684 0 3.174 1.768 3.174 4.086v6.665z" />
            </svg>
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
            <svg className="w-6 h-6 text-gray-300 hover:text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.2C5.373 2.2 0 7.573 0 14.2c0 6.2 4.065 11.455 9.688 13.309.708.13.973-.307.973-.68v-2.455c-4.028.869-4.85-1.946-4.85-1.946-.65-1.646-1.587-2.084-1.587-2.084-1.295-.887.1-.87.1-.87 1.433.1 2.184 1.472 2.184 1.472 1.278 2.183 3.356 1.558 4.176 1.189.16-1.136.498-1.558.907-1.912-3.158-.358-6.488-1.56-6.488-6.947 0-1.537.55-2.8 1.458-3.797-.146-.358-.633-1.8.133-3.75 0 0 1.188-.38 3.892 1.443a13.466 13.466 0 013.544-.477c1.075-.01 2.152.14 3.161.425 2.684-1.825 3.83-1.445 3.83-1.445.77 1.95.299 3.38.154 3.74.915.993 1.469 2.252 1.469 3.78 0 5.393-3.351 6.582-6.562 6.944.458.396.866 1.176.866 2.371v3.503c0 .38.266.827.978.682C19.934 25.654 24 20.393 24 14.2c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
