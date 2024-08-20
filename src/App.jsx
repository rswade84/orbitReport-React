import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from '../components/Banner';
import useState from 'react';
import satData from './components/satData';

function App() {
  function App() {
    const [sat, setSat] = useState(satData);
    const displaySats = [...new Set(satData.map((data) => data.orbitType))];
    // code continues ...

    const filterByType = (currentType) => {};
    return (
      <div>
        <Banner />
        <Buttons />
        <Table />
      </div>
    );
  }
}

export default App;
