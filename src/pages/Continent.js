import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/data";
import { FaLocationDot } from "react-icons/fa6";

const Continent = () => {
  const { continent } = useParams();

  const { countries } = data.continents.find(({ name }) => name === continent);

  return (
    <div>
      <h2>Top Countries in {continent} for your next holiday</h2>
      {countries.map(({ name, image, id }) => (
        <Link to={"/" + continent + "/" + name} key={id}>
          <img src={image} alt={name} />
          <span>
            <FaLocationDot size={"1rem"} /> {name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Continent;
