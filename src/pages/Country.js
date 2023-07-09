import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { FaLocationDot } from "react-icons/fa6";

const Country = () => {
  const { country, continent } = useParams();

  const { destinations } = data.continents
    .find(({ name }) => name === continent)
    .countries.find(({ name }) => name === country);

  return (
    <div>
      <h2>Top Locations in {country} for your next holiday</h2>
      {destinations.map(({ name, image, id }) => (
        <Link to={"/" + continent + "/" + country + "/" + name} key={id}>
          <img src={image} alt={name} />
          <span>
            <FaLocationDot size={"1rem"} /> {name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Country;
