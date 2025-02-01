//Using function as a dependency in useEffect
import React, { useState, useEffect, useCallback } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('react');

  // Define a function to fetch data based on a query
  const fetchData = (async () => {
    try {
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [query]); // Include `query` as a dependency

  useEffect(() => {
    // This effect will run when `fetchData` changes
    fetchData();
  }, [fetchData]); // Add the function as a dependency

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default DataFetcher;
