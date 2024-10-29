import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCountryPage = () => {
  let [singleCountry, setSingleCountry] = useState([]);
  let [translations, setTranslations] = useState([]);
  let inputValueSplit = useState("");
  let inputValue = useRef();
  let [showMore, setShowMore] = useState(false);
  const { cca3 } = useParams();
  console.log(cca3);
  let updateCca3 = cca3;
  updateCca3 = updateCca3.split("").splice(1).join("");

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

    console.log(updateCca3);
    fetch(`https://restcountries.com/v3.1/alpha/${updateCca3}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("🚀 ~ .then ~ result:", result);
        setSingleCountry(result);

        translations.map((item) => {
          console.log(item.ara.common);
        });
      })
      .catch((error) => console.log(error));
  }, [updateCca3]);

  // Show More Button Function
  function showMoreButtonFunction() {
    setShowMore(!showMore);
    console.log(showMore);
  }

  // Check if singleCountry is null or not yet loaded
  if (!singleCountry) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className=" p-8 rounded-xl shadow-xl flex flex-col items-center space-y-6">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-white"></div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-700">
            Loading, please wait...
          </h1>
        </div>
      </div>
    ); // Display loading message
  }

  if (!singleCountry) {
    return (
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
    );
  }

  // Check if singleCountry is an array and has at least one element
  if (!Array.isArray(singleCountry) || singleCountry.length === 0) {
    return (
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
    );
  }

  const country = singleCountry[0];


  function filterFunction() {
    
    inputValueSplit = inputValue.current.value.split('');
    console.log(inputValueSplit[0])
    console.log(inputValue.current.value);
    const filterFruits = fruits.filter(item => item.toLowerCase() === inputValue.current.value.toLowerCase())
      console.log(filterFruits);
    
  }

  return (
    <div className="country-detail bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 mx-auto text-center flex flex-col items-center">
    
      {country.flags && country.flags.png && (
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-40 mb-4 rounded-md shadow-md transition-transform transform hover:scale-105"
        />
      )}

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        {country.name?.common || "N/A"}
      </h1>
      <h2 className="text-xl text-gray-500 mb-4">
        {country.name?.official || "N/A"}
      </h2>

      <div className="info mt-4 space-y-4">
        {[
          { label: "Area", value: `${country.area || "N/A"} km²` },
          { label: "Population", value: country.population || "N/A" },
          { label: "Region", value: country.region || "N/A" },
          { label: "Subregion", value: country.subregion || "N/A" },
          { label: "Capital", value: country.capital?.[0] || "N/A" },
        ].map((item, index) => (
          <p
            key={index}
            className="text-lg text-gray-800 font-semibold flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-9h8v2h-8v-2zm0-3h8v2h-8v-2z" />
            </svg>
            {item.label}: {item.value}
          </p>
        ))}
      </div>

      {country.currencies && (
        <div className="currencies mt-6">
          <p className="text-lg text-gray-800 font-semibold flex items-center justify-center">
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-9h8v2h-8v-2zm0-3h8v2h-8v-2z" />
            </svg>
            Currency: {Object.values(country.currencies)[0]?.name || "N/A"} (
            {Object.values(country.currencies)[0]?.symbol || "N/A"})
          </p>
        </div>
      )}

      <div className="maps mt-6 flex flex-col space-y-2">
        <a
          href={country.maps?.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          <svg
            className="w-5 h-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-9h8v2h-8v-2zm0-3h8v2h-8v-2z" />
          </svg>
          Google Maps
        </a>
        <a
          href={country.maps?.openStreetMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200"
        >
          <svg
            className="w-5 h-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l9 9-9 9-9-9 9-9zm0 18l-7-7 7-7 7 7-7 7z" />
          </svg>
          OpenStreetMap
        </a>
      </div>

      {country.borders && country.borders.length > 0 && (
        <div className="borders mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Borders:</h3>
          <div className="flex gap-2 justify-center flex-wrap mt-2">
            {country.borders.map((border, index) => (
              <span
                key={index}
                className="bg-primary text-white px-4 py-1 rounded-md shadow-md"
              >
                {border}
              </span>
            ))}
          </div>
        </div>
      )}

      {country.languages && (
        <div className="languages mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Languages:</h3>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            {Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      )}

      {country.coatOfArms && (
        <div className="coat-of-arms mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Coat of Arms:</h3>
          <img
            src={country.coatOfArms.png}
            alt={`${country.name.common} coat of arms`}
            className="w-40 mt-2 rounded-md shadow-md"
          />
        </div>
      )}

      {country.timezones && (
        <div className="timezones mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Timezones:</h3>
          <ul className="list-disc list-inside mt-2 text-gray-800">
            {country.timezones.map((timezone, index) => (
              <li key={index}>{timezone}</li>
            ))}
          </ul>
        </div>
      )}

      {country.populationDensity && (
        <div className="population-density mt-6">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center justify-center">
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-4-9h8v2h-8v-2zm0-3h8v2h-8v-2z" />
            </svg>
            Population Density: {country.populationDensity || "N/A"} people/km²
          </h3>
        </div>
      )}
      {country.translations && (
        <div className="p-6 bg-lime-400 rounded-lg shadow-lg shadow-inherit max-w-2xl mx-auto mt-3 flex flex-col ">
          <h1 className="text-2xl font-bold text-center mb-6 flex items-center justify-center text-white bg-black p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            Country Translations
          </h1>

          {/* Arabic Translation */}
          <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="100"
              height="75"
              className="border-[1px] rounded-md border-black"
            >
              <rect width="640" height="480" fill="#007A33" />
              <path fill="#fff" d="M0 160h640v160H0z" />
              <text
                x="320"
                y="260"
                fill="#007A33"
                font-size="40"
                text-anchor="middle"
                font-family="Arial"
              >
                العربية
              </text>
            </svg>

            <div className="text-black">
              <p className="text-lg font-semibold">Arabic (ARA)</p>
              <p>
                Official:{" "}
                <span className="font-medium">
                  {country.translations.ara.official}
                </span>
              </p>
              <p>
                Common:{" "}
                <span className="text-gray-700">
                  {country.translations.ara.common}
                </span>
              </p>
            </div>
          </div>

          {/* Breton Translation */}
          <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="100"
              height="75"
              className="border-[1px] rounded-md border-black"
            >
              <rect width="640" height="480" fill="#fff" />
              <rect y="80" width="640" height="80" fill="#000" />
              <rect y="240" width="640" height="80" fill="#000" />
              <rect y="400" width="640" height="80" fill="#000" />
              <g fill="#000">
                <path d="M0,0 L20,0 L20,20 L0,20 Z" />
                <path d="M0,40 L20,40 L20,60 L0,60 Z" />
                <path d="M0,80 L20,80 L20,100 L0,100 Z" />
                <path d="M0,120 L20,120 L20,140 L0,140 Z" />
                <path d="M0,160 L20,160 L20,180 L0,180 Z" />
                <path d="M0,200 L20,200 L20,220 L0,220 Z" />
                <path d="M0,280 L20,280 L20,300 L0,300 Z" />
                <path d="M0,320 L20,320 L20,340 L0,340 Z" />
                <path d="M0,360 L20,360 L20,380 L0,380 Z" />
                <path d="M0,400 L20,400 L20,420 L0,420 Z" />
                <path d="M0,440 L20,440 L20,460 L0,460 Z" />
              </g>
            </svg>

            <div className="text-black">
              <p className="text-lg font-semibold">Breton (BRE)</p>
              <p>
                Official:{" "}
                <span className="font-medium">
                  {country.translations.bre.official}
                </span>
              </p>
              <p>
                Common:{" "}
                <span className="text-gray-700">
                  {country.translations.bre.common}
                </span>
              </p>
            </div>
          </div>

          {/* Czech Translation */}
          <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 480"
              width="100"
              height="75"
              className="border-[1px] rounded-md border-black"
            >
              <rect width="640" height="480" fill="#fff" />
              <path fill="#cdceeb" d="M0 0l320 240L0 480z" />
            </svg>

            <div className="text-black">
              <p className="text-lg font-semibold">Czech (CES)</p>
              <p>
                Official:{" "}
                <span className="font-medium">
                  {country.translations.ces.official}
                </span>
              </p>
              <p>
                Common:{" "}
                <span className="text-gray-700">
                  {country.translations.ces.common}
                </span>
              </p>
            </div>
          </div>
          {showMore == false ? (
            <button
              className="flex items-center text-black border-2 p-2 border-black mb-5 hover:bg-gray-200 transition-colors justify-center"
              onClick={showMoreButtonFunction}
            >
              <span className="mr-2">Show More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          ) : null}

          {showMore ? (
            <div className="flex flex-col">
              <button
                className="flex items-center text-black border-2 p-2 border-black mb-5 hover:bg-gray-200 transition-colors justify-center"
                onClick={showMoreButtonFunction}
              >
                <span className="mr-2">Hide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s5-9 11-9 11 9 11 9-5 9-11 9-11-9-11-9z" />
                  <path d="M17.94 17.94l-3.88-3.88" />
                </svg>
              </button>
              {/* Welsh Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#fff" />
                  <rect y="240" width="640" height="240" fill="#00843D" />
                  <path
                    fill="#C8102E"
                    d="M420 240l20-60 20 60 60-20-60 20 20 60-20-60-60 20z"
                  />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Welsh (CYM)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.cym.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.cym.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* German Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#FF0000" />
                  <rect width="640" height="320" fill="#000" />
                  <rect width="640" height="160" fill="#FFCC00" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">German (DEU)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.deu.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.deu.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Estonian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="160" fill="#00ADEF" />
                  <rect width="640" height="160" y="160" fill="#FFFFFF" />
                  <rect width="640" height="160" y="320" fill="#000000" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Estonian (EST)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.est.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.est.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Finnish Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#003580" />
                  <rect width="640" height="80" y="200" fill="#fff" />
                  <rect width="80" height="480" x="200" fill="#fff" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Finnish (FIN)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.fin.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.fin.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* French Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#0055A4" />
                  <rect width="640" height="480" fill="#fff" x="213.33" />
                  <rect width="640" height="480" fill="#EF4135" x="426.67" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">French (FRA)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.fra.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.fra.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Croatian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#F4F4F4" />
                  <rect width="640" height="160" fill="#C8102E" />
                  <rect width="640" height="160" y="320" fill="#005DAA" />
                  <path
                    fill="#F4F4F4"
                    d="M320 240L340 160 300 180 290 140 280 180z"
                  />
                </svg>
                <div className="text-black">
                  <p className="text-lg font-semibold">Croatian (HRV)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.hrv.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.hrv.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Hungarian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#C8102E" />
                  <rect width="640" height="320" fill="#fff" />
                  <rect width="640" height="160" fill="#005DAA" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Hungarian (HUN)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.hun.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.hun.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Italian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#008C45" />
                  <rect width="640" height="480" fill="#fff" x="213.33" />
                  <rect width="640" height="480" fill="#CE2B37" x="426.67" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Italian (ITA)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.ita.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.ita.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Japanese Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#fff" />
                  <circle cx="320" cy="240" r="80" fill="#BC002D" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Japanese (JPN)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.jpn.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.jpn.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Korean Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#fff" />
                  <circle cx="320" cy="240" r="80" fill="#C8102E" />
                  <circle
                    cx="320"
                    cy="240"
                    r="80"
                    fill="#003580"
                    transform="translate(80, 0)"
                  />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Korean (KOR)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.kor.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.kor.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Dutch Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#21468B" />
                  <rect width="640" height="160" fill="#AE1C28" />
                  <rect width="640" height="160" y="320" fill="#FFFFFF" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Dutch (NLD)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.nld.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.nld.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Persian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#007A33" />
                  <rect width="640" height="160" fill="#FFFFFF" />
                  <rect width="640" height="160" y="320" fill="#FF0000" />
                  <path
                    fill="#FFFFFF"
                    d="M320 240L340 160 300 180 290 140 280 180z"
                  />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Persian (PER)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.per.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.per.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Polish Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="240" fill="#FFFFFF" />
                  <rect width="640" height="240" y="240" fill="#C8102E" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Polish (POL)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.pol.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.pol.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Portuguese Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#008C45" />
                  <rect width="640" height="480" fill="#FF0000" x="320" />
                  <circle cx="320" cy="240" r="80" fill="#FFD700" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Portuguese (POR)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.por.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.por.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Russian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#FFFFFF" />
                  <rect width="640" height="320" fill="#0000FF" />
                  <rect width="640" height="160" fill="#FF0000" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Russian (RUS)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.rus.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.rus.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Slovak Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#FFFFFF" />
                  <rect width="640" height="160" fill="#005DAA" />
                  <rect width="640" height="160" y="320" fill="#FF0000" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Slovak (SLK)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.slk.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.slk.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Spanish Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#FF0000" />
                  <rect width="640" height="480" fill="#F1BF00" y="160" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Spanish (SPA)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.spa.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.spa.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Serbian Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#A40000" />
                  <rect width="640" height="320" fill="#005DAA" />
                  <rect width="640" height="160" fill="#FFFFFF" />
                  <path fill="#FFD700" d="M190 160h80v80h-80z" />
                  <path fill="#005DAA" d="M150 140h80v80h-80z" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Serbian (SRP)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.srp.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.srp.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Swedish Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#005DAA" />
                  <rect width="640" height="80" y="200" fill="#FFD700" />
                  <rect width="80" height="480" x="200" fill="#FFD700" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Swedish (SWE)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.swe.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.swe.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Turkish Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#E30A17" />
                  <circle cx="250" cy="240" r="60" fill="#fff" />
                  <circle cx="230" cy="240" r="40" fill="#E30A17" />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Turkish (TUR)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.tur.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.tur.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Urdu Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <img
                  src="data:image/png;base64,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"
                  alt="Pakistan Flag"
                  className="w-[100px] h-[80px] rounded-md border-[1px] border-black"
                />

                <div className="text-black">
                  <p className="text-lg font-semibold">Urdu (URD)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.urd.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.urd.common}
                    </span>
                  </p>
                </div>
              </div>

              {/* Chinese Translation */}
              <div className="flex items-center space-x-4 mb-4 justify-center border-2 p-1 rounded-md border-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                  width="100"
                  height="75"
                  className="border-[1px] rounded-md border-black"
                >
                  <rect width="640" height="480" fill="#FF0000" />
                  <path
                    fill="#FFD700"
                    d="M50 70l20 60 60-20-60 20 20 60-20-60-60 20z"
                  />
                </svg>

                <div className="text-black">
                  <p className="text-lg font-semibold">Chinese (ZHO)</p>
                  <p>
                    Official:{" "}
                    <span className="font-medium">
                      {country.translations.zho.official}
                    </span>
                  </p>
                  <p>
                    Common:{" "}
                    <span className="text-gray-700">
                      {country.translations.zho.common}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SingleCountryPage;
