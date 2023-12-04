"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

/* example-start */
const SEARCH_URI = 'https://www.api.hcorealestates.org/users/autosuggest/';

const AsyncSearch = () => {
   const [options, setOptions] = useState([]);
   const router = useRouter()
   const loadOptions = async (query) => { 
      `${SEARCH_URI}?term=${query}`
      const response = await fetch(`${SEARCH_URI}?term=${query}`);
      const data = await response.json();
      setOptions(data.items);
   };

  const handleChange = (selected) => {
      console.log(selected[0].url);
      router.push(selected[0].url);
   };

  return (
   <div className="search">
      <div className="search--modify">
         <AsyncTypeahead
         id="my-async-typeahead"
         labelKey="label"
         minLength={3}
         onSearch={loadOptions}      
         options={options}
         onChange={handleChange}
         placeholder="Enter a Locality, Builder or Project..."
         />
      </div>
   </div>
  );
};
export default AsyncSearch;


