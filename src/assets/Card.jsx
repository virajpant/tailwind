import React, { useState, useEffect } from 'react';

function YourComponent() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('card.json'); // Replace 'YOUR_API_ENDPOINT' with the actual API URL
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
                   <p>{item.btn}</p>
                 </div>
               </div>
               </div>
        ))}
    </div>
  );
}

export default YourComponent;






// import React from 'react'

// const Card = () => {
//   return (
//     <div>
//        <>
//     <div className="md:flex" >
//       <div className="ml-16 mt-6">
//         <img className="w-[100%]" src="" alt="" />
//         <h1></h1>
//         <span></span>
//         <p></p>
//       </div>
//     </div>
//     </>
//     </div>
//   )
// }

// export default Card
 