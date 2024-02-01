import React, { useState, useEffect } from 'react';

function Component() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('card2.json'); // Replace 'YOUR_API_ENDPOINT' with the actual API URL
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className='md:flex'>
      {/* Render your data here */}
        {data.map(item => (
          
          <div key={item.id}>
               <div>
                 <div className="ml-8 mr-8 mt-6">
                   <img className="w-[100%]" src={item.image} alt="" />
                   <h1 className='text-2xl font-semibold'>{item.device}</h1>
                   <span>{item.description}</span>
                   <p className='text-blue-600 '>{item.btn}</p>
                 </div>
               </div>
               </div>
        ))}
    </div>
  );
}

export default Component;
