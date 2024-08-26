import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from './components/Banner';
import { useState } from 'react';
import satData from './components/satData';

function App() {
  // NOTE: 'sat' holds the current set of satellite data being displayed...
  // NOTE: 'setSat' is the function used to update the 'sat' state or position...
  const [sat, setSat] = useState(satData);

  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats); // NOTE: setSat updates the state with the filtered satellite data...
  };

  return (
    <>
      <Banner />

      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes} // NOTE: Renamed displaySats per Code With Carrie advice...
      />

      <Table sat={sat} />
    </>
  );
}

export default App;
