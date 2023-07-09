import React from "react";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Continents = () => {
  const { continents } = data;

  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2 className="blue">Top Continents for your next holiday</h2>
      {continents.map(({ name, image, id }) => (
        <Link to={"/continent/" + name} key={id}>
          <img src={image} alt={name} />
          <span>
            <FaLocationDot size={"1rem"} /> {name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Continents;
