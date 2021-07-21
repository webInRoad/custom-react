import './App.css';
import ReactReduxHookPage from './pages/ReactReduxHookPage'
import HooksPage from './pages/HooksPage'
import ReduxPage from './pages/ReduxPage'
import RouteComponePage from './pages/RouteComponePage'
import ReactRouterPage from './pages/ReactRouterPage'
import { useState } from 'react'
function App() {
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <button onClick={() => setNum(num + 1)}>累加</button>
      {/* {
        num % 2 && <ReduxPage />
      } */}
      {/* <ReactReduxHookPage /> */}
      {/* <HooksPage /> */}
      <RouteComponePage />
    </div>
  );
}

export default App;
