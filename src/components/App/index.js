import "./App.css";
import Dashboard from "../Dashboard";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

function App() {
  return (
    <div className="App">
      <Dashboard/>

    </div>
  );
}

export default App;
