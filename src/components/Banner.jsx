import './styling.css';

// NOTE: Banner renders the header and paragraph elements in the application...
// NOTE: The Banner component is used in the App component...
function Banner() {
  return (
    <div>
      <header>
        <h1>Orbit Report</h1>
        <p>Use the buttons below to see satellites in that orbit type</p>
      </header>
    </div>
  );
}

export default Banner;
