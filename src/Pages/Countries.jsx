import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllCountriesData = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();
  const [loadingCondition, setLoadingCondition] = useState(false);
  const filterInputValue = useRef();
  let [filterCountry, setFilterCountry] = useState("");
  let [searchCondition,setSearchCondition] = useState(false);
  let [resultMessage, setResultMessage] = useState([]);
  let [searchBtnLoadingCondition,setSearchBtnLoadingCondition] = useState(false);

  const countriesCca3 = [
    { cca3: "SGS", name: "South Georgia and the South Sandwich Islands" },
    { cca3: "GRD", name: "Grenada" },
    { cca3: "CHE", name: "Switzerland" },
    { cca3: "SLE", name: "Sierra Leone" },
    { cca3: "HUN", name: "Hungary" },
    { cca3: "TWN", name: "Taiwan" },
    { cca3: "WLF", name: "Wallis and Futuna" },
    { cca3: "BRB", name: "Barbados" },
    { cca3: "PCN", name: "Pitcairn Islands" },
    { cca3: "CIV", name: "Ivory Coast" },
    { cca3: "TUN", name: "Tunisia" },
    { cca3: "ITA", name: "Italy" },
    { cca3: "BEN", name: "Benin" },
    { cca3: "IDN", name: "Indonesia" },
    { cca3: "CPV", name: "Cabo Verde" },
    { cca3: "KNA", name: "Saint Kitts and Nevis" },
    { cca3: "LAO", name: "Laos" },
    { cca3: "BES", name: "Bonaire, Sint Eustatius and Saba" },
    { cca3: "UGA", name: "Uganda" },
    { cca3: "AND", name: "Andorra" },
    { cca3: "BDI", name: "Burundi" },
    { cca3: "ZAF", name: "South Africa" },
    { cca3: "FRA", name: "France" },
    { cca3: "LBY", name: "Libya" },
    { cca3: "MEX", name: "Mexico" },
    { cca3: "GAB", name: "Gabon" },
    { cca3: "MNP", name: "Northern Mariana Islands" },
    { cca3: "MKD", name: "North Macedonia" },
    { cca3: "CHN", name: "China" },
    { cca3: "YEM", name: "Yemen" },
    { cca3: "BLM", name: "Saint Barthélemy" },
    { cca3: "GGY", name: "Guernsey" },
    { cca3: "SLB", name: "Solomon Islands" },
    { cca3: "SJM", name: "Svalbard and Jan Mayen" },
    { cca3: "FRO", name: "Faroe Islands" },
    { cca3: "UZB", name: "Uzbekistan" },
    { cca3: "EGY", name: "Egypt" },
    { cca3: "SEN", name: "Senegal" },
    { cca3: "LKA", name: "Sri Lanka" },
    { cca3: "PSE", name: "Palestine" },
    { cca3: "BGD", name: "Bangladesh" },
    { cca3: "PER", name: "Peru" },
    { cca3: "SGP", name: "Singapore" },
    { cca3: "TUR", name: "Turkey" },
    { cca3: "AFG", name: "Afghanistan" },
    { cca3: "ABW", name: "Aruba" },
    { cca3: "COK", name: "Cook Islands" },
    { cca3: "GBR", name: "United Kingdom" },
    { cca3: "ZMB", name: "Zambia" },
    { cca3: "FIN", name: "Finland" },
    { cca3: "NER", name: "Niger" },
    { cca3: "CXR", name: "Christmas Island" },
    { cca3: "TKL", name: "Tokelau" },
    { cca3: "GNB", name: "Guinea-Bissau" },
    { cca3: "AZE", name: "Azerbaijan" },
    { cca3: "REU", name: "Réunion" },
    { cca3: "DJI", name: "Djibouti" },
    { cca3: "PRK", name: "North Korea" },
    { cca3: "MUS", name: "Mauritius" },
    { cca3: "MSR", name: "Montserrat" },
    { cca3: "VIR", name: "U.S. Virgin Islands" },
    { cca3: "COL", name: "Colombia" },
    { cca3: "GRC", name: "Greece" },
    { cca3: "HRV", name: "Croatia" },
    { cca3: "MAR", name: "Morocco" },
    { cca3: "DZA", name: "Algeria" },
    { cca3: "ATA", name: "Antarctica" },
    { cca3: "NLD", name: "Netherlands" },
    { cca3: "SDN", name: "Sudan" },
    { cca3: "FJI", name: "Fiji" },
    { cca3: "LIE", name: "Liechtenstein" },
    { cca3: "NPL", name: "Nepal" },
    { cca3: "PRI", name: "Puerto Rico" },
    { cca3: "GEO", name: "Georgia" },
    { cca3: "PAK", name: "Pakistan" },
    { cca3: "MCO", name: "Monaco" },
    { cca3: "BWA", name: "Botswana" },
    { cca3: "LBN", name: "Lebanon" },
    { cca3: "PNG", name: "Papua New Guinea" },
    { cca3: "MYT", name: "Mayotte" },
    { cca3: "DOM", name: "Dominican Republic" },
    { cca3: "NFK", name: "Norfolk Island" },
    { cca3: "BVT", name: "Bouvet Island" },
    { cca3: "QAT", name: "Qatar" },
    { cca3: "MDG", name: "Madagascar" },
    { cca3: "IND", name: "India" },
    { cca3: "SYR", name: "Syria" },
    { cca3: "MNE", name: "Montenegro" },
    { cca3: "SWZ", name: "Eswatini" },
    { cca3: "PRY", name: "Paraguay" },
    { cca3: "SLV", name: "El Salvador" },
    { cca3: "UKR", name: "Ukraine" },
    { cca3: "IMN", name: "Isle of Man" },
    { cca3: "NAM", name: "Namibia" },
    { cca3: "ARE", name: "United Arab Emirates" },
    { cca3: "BGR", name: "Bulgaria" },
    { cca3: "GRL", name: "Greenland" },
    { cca3: "DEU", name: "Germany" },
    { cca3: "KHM", name: "Cambodia" },
    { cca3: "IRQ", name: "Iraq" },
    { cca3: "ATF", name: "French Southern Territories" },
    { cca3: "SWE", name: "Sweden" },
    { cca3: "CUB", name: "Cuba" },
    { cca3: "KGZ", name: "Kyrgyzstan" },
    { cca3: "RUS", name: "Russia" },
    { cca3: "MYS", name: "Malaysia" },
    { cca3: "STP", name: "São Tomé and Príncipe" },
    { cca3: "CYP", name: "Cyprus" },
    { cca3: "CAN", name: "Canada" },
    { cca3: "MWI", name: "Malawi" },
    { cca3: "SAU", name: "Saudi Arabia" },
    { cca3: "BIH", name: "Bosnia and Herzegovina" },
    { cca3: "ETH", name: "Ethiopia" },
    { cca3: "ESP", name: "Spain" },
    { cca3: "SVN", name: "Slovenia" },
    { cca3: "OMN", name: "Oman" },
    { cca3: "SPM", name: "Saint Pierre and Miquelon" },
    { cca3: "MAC", name: "Macau" },
    { cca3: "SMR", name: "San Marino" },
    { cca3: "LSO", name: "Lesotho" },
    { cca3: "MHL", name: "Marshall Islands" },
    { cca3: "SXM", name: "Sint Maarten" },
    { cca3: "HTI", name: "Haiti" },
    { cca3: "FLK", name: "Falkland Islands" },
    { cca3: "DMA", name: "Dominica" },
    { cca3: "LBR", name: "Liberia" },
    { cca3: "SUR", name: "Suriname" },
    { cca3: "NGA", name: "Nigeria" },
    { cca3: "KAZ", name: "Kazakhstan" },
    { cca3: "PLW", name: "Palau" },
    { cca3: "ESH", name: "Western Sahara" },
    { cca3: "HND", name: "Honduras" },
    { cca3: "NRU", name: "Nauru" },
    { cca3: "VAT", name: "Vatican City" },
    { cca3: "ROU", name: "Romania" },
    { cca3: "VNM", name: "Vietnam" },
    { cca3: "KOR", name: "South Korea" },
    { cca3: "ISR", name: "Israel" },
    { cca3: "JPN", name: "Japan" },
    { cca3: "BRA", name: "Brazil" },
    { cca3: "BLZ", name: "Belize" },
    { cca3: "LUX", name: "Luxembourg" },
    { cca3: "ALB", name: "Albania" },
    { cca3: "JOR", name: "Jordan" },
    { cca3: "HKG", name: "Hong Kong" },
    { cca3: "TTO", name: "Trinidad and Tobago" },
    { cca3: "ISR", name: "Israel" },
    { cca3: "JPN", name: "Japan" },
    { cca3: "USA", name: "United States" },
  ];

  function seacrhForFilter(){
    if(filterInputValue.current.value === '' || filterInputValue.current.value === null){
      alert('Please Enter a country you want.');
      return
  }
  // if((filterCountry !== null || filterCountry !== '') && filterCountry === filterInputValue.current.value ){
  //   alert('Filter values are same');
  //   setSearchCondition(true);
  //   setTimeout(()=>{
  //     setSearchCondition(false);
  //   },3000)
  //   return
  // }
  
  setFilterCountry(filterInputValue.current.value);
  
  if(filterCountry === filterInputValue.current.value){
    console.log('You are currenty on your desired country.')
  }
  console.log(filterCountry);
  filterInputValue.current.value = '';

  }

  function filterCountries() {
    if(filterInputValue.current.value === '' || filterInputValue.current.value === null){
      return
    }
    
    if((filterCountry !== null || filterCountry !== '') && filterCountry === filterInputValue.current.value ){
      if(filterInputValue.current.value.length >= 3){
        setTimeout(()=>{
          alert('Filter values are same');
        },500)
        
        return
      }
    }
    
    if(filterInputValue.current.value.length >= 3){
      setFilterCountry(filterInputValue.current.value);
      console.log('Filter country length is equal or upto 2 ...')
    }
    if(filterCountry === filterInputValue.current.value){
      console.log('You are currenty on your desired country.')
    }
    console.log(filterCountry);

  }

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "x-apihub-key",
      "sJeJLTXncBSyH8Q5LNRnuBDJwLHYof19MDi05AGRVXV8lD5eeG"
    );
    myHeaders.append(
      "x-apihub-host",
      "Global-REST-Countries-API.allthingsdev.co"
    );
    myHeaders.append(
      "x-apihub-endpoint",
      "bd1c54c5-d841-4898-842f-c00457c0aafc"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    
    if (filterCountry !== "" && filterCountry !== null) {
      setSearchBtnLoadingCondition(true);
      countriesCca3.map((item) => {
        console.log(item.name);
        if (filterCountry.toLowerCase() === item.name.toLowerCase()) {
          filterCountry = item.cca3;
          setFilterCountry(item.cca3);
          console.log(filterCountry);
        }
      });
      console.log(filterCountry);
      fetch(
        `https://restcountries.com/v3.1/alpha/${filterCountry}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setSearchBtnLoadingCondition(false);
          console.log(filterCountry);
          console.log("🚀 ~ .then ~ result:", result);
     if(result.message){
      console.log(result.message);
      
     
      setSearchCondition(true)
      setTimeout(()=>{
        setSearchCondition(false);
      },3000);
      
      return
     }
     
          result.forEach((country, index) => {
            console.log(country);
          });
          setCountries(result);
        })
        .catch((error) => {
          setError(error)
          console.log(error)
        });
    } else {
      fetch(`https://restcountries.com/v3.1/all`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
        setSearchBtnLoadingCondition(false);
          console.log("🚀 ~ .then ~ result:", result);
          result.forEach((country, index) => {
            console.log(country.cca3);
          });
          setCountries(result);

          setLoadingCondition(true);
          setTimeout(() => {
            setLoadingCondition(false);
          }, 3000);
        })
        .catch((error) => setError(error));
    }
  }, [filterCountry]);

  function goToSinglePage(cca3) {
    Navigate(`/singlecountry/:${cca3}`);
  }

  if (error) {
    return <h1>Error fetching data</h1>;
  }

  return (
    <div className="container mx-auto p-6">
      {countries.length > 0 ? (
        <div className="flex items-center justify-center mb-5">
         <div className="relative w-full max-w-md">
  <input
    type="text"
    placeholder="Search for country..."
    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black transition duration-300 ease-in-out"
    ref={filterInputValue}
    onChange={filterCountries}
  />
  <div className="absolute left-3 top-2/4 transform -translate-y-1/2">
    {/* Search Icon SVG */}
    <svg
      className="w-5 h-5 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m2.35-7.65a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
</div>

          
          {searchBtnLoadingCondition ? <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out" disabled>
  <svg className="w-5 h-5 mr-2 animate-spin fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path d="M12 2v2a8 8 0 11-8 8H2a10 10 0 1010-10z"/>
  </svg>
  Searching
</button>
 : <button  onClick={seacrhForFilter} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
  <svg className="w-5 h-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 2a8 8 0 106.32 13.906l4.387 4.387a1 1 0 001.415-1.415l-4.387-4.387A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
  </svg>
  Search
</button>
}
          
        </div>
      ) : null}
      {countries.length > 0  && searchCondition ? <div className="flex  absolute items-center space-x-2 p-3 bg-red-100 text-red-700 border border-red-400 rounded-md">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.707-5.707a1 1 0 011.414 0l2-2a1 1 0 00-1.414-1.414L10 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2z" clipRule="evenodd" />
  </svg>
  <span className="font-medium">Invalid input:</span>
  <span>The country name is not valid. Please enter a valid country name.</span>
</div>
:
      null}
      <div className="flex justify-center gap-5 flex-wrap">
        {countries.length > 0 && loadingCondition ? (
          <div className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center mx-auto">
              <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-t-primary border-white"></div>
              <h1 className="mt-4 text-2xl text-primary font-bold">
                Loading...
              </h1>
            </div>
          </div>
        ) : null}

        {countries.length > 0 ? (
          countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border-[1px] border-s-8 p-6 transition-transform hover:scale-105 shadow-[white] hover:shadow-lg w-[350px] sm:w-[300px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
            >
              {/* Country Name */}
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                {country.name.common}{" "}
                <span className="text-sm text-gray-500">
                  ({country.name.official})
                </span>
              </h2>

              {/* Flag */}
              <div className="flex justify-center mb-4">
                <img
                  src={country.flags.png}
                  alt={`Flag of ${country.name.common}`}
                  className="w-32 h-auto object-contain"
                />
              </div>

              {/* Population, Region, Capital */}
              <p className="text-gray-700 mb-1">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
              </p>

              {/* SVG Button Links */}
              <div className="flex flex-col space-y-2">
                {/* Google Maps Button */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${country.latlng[0]},${country.latlng[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm1.937 9.998h-5.874c-.407 0-.734.327-.734.734v.001c0 .407.327.735.734.735h5.874c.407 0 .734-.328.734-.735v-.001c0-.407-.327-.734-.734-.734zm0-3.999h-5.874c-.407 0-.734.327-.734.734v.001c0 .407.327.734.734.734h5.874c.407 0 .734-.327.734-.734v-.001c0-.407-.327-.734-.734-.734z" />
                  </svg>
                  Google Maps
                </a>

                {/* OpenStreetMap Button */}
                <a
                  href={`https://www.openstreetmap.org/?mlat=${country.latlng[0]}&mlon=${country.latlng[1]}#map=7/${country.latlng[0]}/${country.latlng[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition w-full"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.92 5.67l1.98 2.54-2.27.73-1.74-2.61c.57-.42 1.18-.88 2.03-.66zM13 2l5.55 1.73c.47.17.75.66.6 1.12l-1.5 4.4 1.69 2.44c.24.35.07.83-.32 1.01L12 14.75 5.97 12.7a.75.75 0 01-.35-1.02L7.47 9l-.25-.74-2.46.8a.75.75 0 01-.92-.57l-.9-3.34a.75.75 0 01.6-.9L11 2h2zm-1 4.13L9.18 9.4 12 10.44l2.82-1.03L12 6.13zm2.7 10.92l5.6 2.93c.47.24.67.82.45 1.3l-1.07 2.16c-.2.41-.66.63-1.11.49L12 20l-6.57 2.47a.9.9 0 01-1.09-.5L3.16 19.9a.9.9 0 01.45-1.29l5.6-2.92 1.79.61h2.12l1.78-.61z" />
                  </svg>
                  OpenStreetMap
                </a>
              </div>

              {/* Borders if available */}
              {country.borders && (
                <p className="mt-4 text-gray-600">
                  <strong>Borders:</strong> {country.borders.join(", ")}
                </p>
              )}

              {/* Currency */}
              {country.currencies && (
                <p className="mt-2 text-gray-600">
                  <strong>Currency:</strong>{" "}
                  {Object.values(country.currencies)[0].name} (
                  {Object.values(country.currencies)[0].symbol})
                </p>
              )}
              {/* Know More Button */}
              <a
                onClick={() => goToSinglePage(country.cca3)}
                className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded mt-4 hover:bg-indigo-700 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle-fill mr-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3.9V9.5a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v.6h2v.6zM8 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                Know More
              </a>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-screen ">
            <div className=" p-8 rounded-xl shadow-xl flex flex-col items-center space-y-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-white"></div>
              </div>
              <h1 className="text-2xl font-semibold text-white">
                Loading, please wait...
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCountriesData;
