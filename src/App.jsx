import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from './components/Banner';
import { useState } from 'react';
import satData from './components/satData';

function App() {
  // Declares a state variable named 'sat' to hold the current set of satellite data being displayed...
  // 'setSat' is the function used to update the 'sat' state or position...
  // useState is a hook that returns an array with two elements: the current state value and a function to update it...

  // NOTE: Array Destructuring with a React Hook called 'useState'...
  const [sat, setSat] = useState(satData);

  // NOTE: orbitTypes creates an array of unique orbit types by extracting the 'orbitType' from each satellite in the data...
  // NOTE: This is used to generate filter buttons for each unique orbit type, there should only be 4 buttons...
  const orbitTypes = [...new Set(satData.map((data) => data.orbitType))];

  // NOTE: filterByType is an anonymous function that filters the satellite data by the selected orbit type...
  // NOTE: It updates the 'sat' state to only include satellites that match the selected orbit type....

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats); // Updates the state with the filtered satellite data...
  };

  return (
    <>
      {/* Renders the Banner component at the top of the application. */}
      <Banner />

      {/* Renders the Buttons component, passing the filterByType function, setSat function, and orbitTypes array as props.
          These props allow the Buttons component to filter satellites by type and reset the state. */}
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={orbitTypes} // NOTE: Renamed per Code With Carrie advice...
      />

      {/* Renders the Table component, passing the current satellite data (sat) as a prop.
          The Table component will display this data in a structured table format. */}
      <Table sat={sat} />
    </>
  );
}

export default App;
