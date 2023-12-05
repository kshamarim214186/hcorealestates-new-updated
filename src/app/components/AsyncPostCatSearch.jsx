"use client";
import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

/* example-start */
const SEARCH_URI = process.env.API_URL+'users/autosuggestofpostbycat/';


const AsyncPostCatSearch = ({ catId }) => {
   const [options, setOptions] = useState([]);
   const category = catId;

   const loadOptions = async (query) => { 
      `${SEARCH_URI}?term=${query}`
      const response = await fetch(`${SEARCH_URI}?term=${query}&category=${category}`);
      const data = await response.json();
      setOptions(data.items);
   };

   const handleChange = (selected) => {
      const newTab = window.open(selected[0].url, '_blank');
      newTab.focus();
   };

  return (
   <div className="search">
      <div className="search--modify">
         <AsyncTypeahead
         id="my-async-typeahead"
         labelKey="label"
         minLength={1}
         onSearch={loadOptions}      
         options={options}
         onChange={handleChange}
         placeholder="Enter Post Name..."
         />
      </div>
   </div>
  );
};
export default AsyncPostCatSearch;


