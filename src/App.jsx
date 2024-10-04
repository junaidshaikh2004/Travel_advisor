import React, { useEffect, useState } from 'react'
import Header from './componenets/Header/Header'
import List from './componenets/List/List'
import Map from './componenets/Map/Map'
import { getPlacesData } from './api/index';
const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        setLoading(false);
      },
    );
  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    
    if (!loading && bounds && coordinates) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data);
      }).catch((error) => {
        console.error("Error fetching places data:", error);
      });
    }
  }, [coordinates,bounds]);

  return (
    <div className="h-screen w-full"> 
      <Header />
      <div className="flex flex-col md:flex-row w-full h-[calc(100vh-64px)]"> 
        <div className="w-full md:w-1/3 p-3">
        
          <List places={places}/>
        </div>
        <div className="w-full md:w-2/3 p-3 mt-4 md:mt-0">
          {loading || !coordinates ? (
            <div>Loading Map...</div>
          ) : (
            <Map 
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;