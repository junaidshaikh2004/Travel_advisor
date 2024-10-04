"use client"
import React, { useState } from 'react'
import Details from '../Details/Details'
const List = ({ places }) => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  return (
    <div>
      <div>
        <h4 className="text-3xl font-normal">Restaurants, Hotels & Attractions around you</h4>
      </div>

      <div className="flex gap-10 items-center mt-2">
        <div>
          <label htmlFor="select" className='"block text-sm font-medium text-gray-700'>
            Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            id="select"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
          >
            <option value="">Choose...</option>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div>
          <label htmlFor="rating" className='"block text-sm font-medium text-gray-700'>
            Rating
          </label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            id="rating"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring"
          >
            <option value="">All</option>
            <option value="3.0">Above 3.0</option>
            <option value="4.0">Above 4.0</option>
            <option value="4.5">Above 4.5</option>
          </select>
        </div>
      </div>

     
      <div className="mt-8 max-h-[700px] overflow-x-hidden"> 
        <div className="grid grid-cols-1 gap-8">
          {places?.map((place, i) => (
            <div key={i} className="col-span-12">
              <Details place={place} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;