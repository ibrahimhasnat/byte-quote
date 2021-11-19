import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Categories from './components/Categories';
import Quote from './components/Quote';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Byte Quote</h1>
          <small>One new quote each time.</small>
        </header>
        <div className="info">
          <p>You can also navigate pages through keyboard shortcuts.</p>
          <p>Home: <span>h</span>, Famous quotes: <span>f</span>, Programming quotes: <span>p</span></p>
        </div>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="quote/:type" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
