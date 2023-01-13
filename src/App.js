import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import { publicRoute } from './Routes/publicRoute';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {
        publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))
        }
        {/* {
          publicRoute.map(
            ({path, Component}, index) =>(
              <Route key={index} path={path} element={<Component/>} />
            )
          )
        } */}
      </Routes>
    </div>
  );
}

export default App;
