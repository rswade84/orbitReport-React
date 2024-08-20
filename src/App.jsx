import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from './components/Banner';
import { useState } from 'react';
import satData from './components/satData';

function App() {
  // sat is used to compare changes in state
  // setSat is used to update state
  const [sat, setSat] = useState(satData);
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;
