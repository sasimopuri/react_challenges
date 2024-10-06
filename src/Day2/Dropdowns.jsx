import { useState } from "react";

const DynamicDropdown = () => {
  const [ selectedCountry, setSelectedCountry ] = useState("Inida");
  const countries = [
    { country: "India", cities: ["Hyderabad", "Bangalore"] },
    { country: "France", cities: ["Nice", "Paries"] },
    { country: "Australia", cities: ["Sydney", "Perth"] },
  ];
  console.log(selectedCountry);

  function handleCLick(e) {
    console.log(e.target.value);
    setSelectedCountry(e.target.value);
  }

  return (
    <>
      <h1 className="header">Dynamic Dropdown</h1>
      <select name="" id="" onChange={handleCLick}>
        <option value="">Select</option>
        {countries.map((country) => (
          <option value={country.country}>{country.country}</option>
        ))}
      </select>

      <select name="" id="">
        {
            countries.map((country)=>(
                country.country === selectedCountry && country.cities.map((city)=>(
                    <option value={city.city}>{city}</option>
                ))
            ))
        }
      </select>
    </>
  );
};

export default DynamicDropdown;
