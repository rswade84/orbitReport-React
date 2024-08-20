import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {orbitTypes.map((type, index) => {
        return (
          <button onClick={() => filterByType(type)} key={index}>
            {type} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
      //code continues
    </div>
  );
};

export default Buttons;
