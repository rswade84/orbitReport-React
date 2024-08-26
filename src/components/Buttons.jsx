import satData from './satData';
import './styling.css';

// NOTE: Buttons component is using filterByType function to filter satellite data by type...
// NOTE: Buttons component is using setSat function to reset the state...
// NOTE: Buttons component is using orbitTypes array to generate buttons for each unique orbit type...
const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div className="flex-container">
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
