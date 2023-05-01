import React, { useEffect, useState } from 'react';
import './HW-6.css';

const MyComponent = () => {
  const [data, setData] = useState(null); 
  
  useEffect(() => {
    fetch('https://course-api.com/react-tours-project')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const deleteElement = (id) => {
    const updatedData = data.filter(member => member.id !== id);
    setData(updatedData);
  };
  
  const refresh = () => {
    setData(null);
    fetch('https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const Shortened = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div>
        {isExpanded ? (
          <div>
            {text}
            <button id="smallbut" onClick={toggleText}>
              Read Less
            </button>
          </div>
        ) : (
          <div>
            {text.slice(0, 150)}...
            <button id="smallbut" onClick={toggleText}>
              Read More
            </button>
          </div>
        )}
      </div>
    );
  };

  if (data){
    return(
      <div id='container'>
        <h1>Our Tours</h1>
        {(data.length>0) ? (
          data.map(member=>(
            <div key={member.id} id="member">
              <div id='image'><img src={member.image} alt={member.name}/></div>
              <div id='name'>{member.name} <span>${member.price}</span></div>
              <div id='info'><Shortened text={member.info} /></div>
              <div id='but'><button onClick={() => deleteElement(member.id)}>Not Interested</button></div>
            </div>
          ))
        ) : (
          
          <div id='smallerCont'>
            <p>No Tours Left</p>
            <button onClick={refresh}>Refresh</button>
          </div>
        )}
      </div>
    )
  }
  else {
    return(<p>Loading...</p>)
  }
}

export default MyComponent;