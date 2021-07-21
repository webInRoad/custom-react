import './App.css';
import ReactReduxHookPage from './pages/ReactReduxHookPage'
import HooksPage from './pages/HooksPage'
import ReduxPage from './pages/ReduxPage'
import { useState } from 'react'
function App() {
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <button onClick={() => setNum(num + 1)}>累加</button>
      {
        num % 2 && <ReduxPage />
      }
      {/* <ReactReduxHookPage />
      <HooksPage /> */}
    </div>
  );
}

export default App;
