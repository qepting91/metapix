import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = (props) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Make the API call to retrieve the search results
    axios.get(props.apiUrl)
      .then(res => {
        // Update the state with the search results
        setSearchResults(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.apiUrl]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <a href={result.url}>{result.title}</a>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
