import './styling.css';

// NOTE: The Table component receives 'sat' as a prop, which contains the satellite data to be displayed in the table...
// NOTE: The Table component is used in the App component...
const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Maps over the 'sat' array (from app.jsx) to create a table row for each satellite in the data. */}
        {/* key={data.id} is used to give each row a unique identifier for React's reconciliation process. */}
        {/* (data) is just a placeholer for the current element being processed. */}
        {sat.map((data) => (
          <tr key={data.id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
