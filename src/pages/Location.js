import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

const Location = () => {
  const { country, continent, location } = useParams();

  const {
    id,
    name,
    description,
    image,
    ratings,
    reviews,
    location: loco,
    openingHours,
    ticketPrice,
    website,
  } = data.continents
    .find(({ name }) => name === continent)
    .countries.find(({ name }) => name === country)
    .destinations.find(({ name }) => name === location);

  return (
    <>
      <h2>{location}</h2>

      <div className="location-container">
        <img src={image} alt={name} className="location" />
        <span>
          <p>
            <b className="blue">Description:</b> {description}
          </p>
          <p>
            <b className="blue">Ratings:</b>
            {ratings}
          </p>
          <p>
            <b className="blue">Reviews:</b>
            {reviews}
          </p>
          <p>
            <b className="blue">Location:</b>
            {loco}
          </p>
          <p>
            <b className="blue">Opening Hours:</b>
            {openingHours}
          </p>
          <p>
            <b className="blue">Ticket Price:</b>
            {ticketPrice}
          </p>
          <a className="pink" href={website}>
            Website
          </a>
        </span>
      </div>
    </>
  );
};

export default Location;
