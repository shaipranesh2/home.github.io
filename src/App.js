import Nav from './Nav';
import Intro from './Intro';

import Main from './Main';
import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Nav />
      <Welcome />
      <Intro />
      <Main/>
    </div>
  );
}

export default App;
