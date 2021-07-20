import './App.css';
import ReduxPage from './pages/ReduxPage'
import ReactReduxHookPage from './pages/ReactReduxHookPage'
import { useState } from 'react'
function App() {
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <button onClick={() => setNum(num + 1)}>累加</button>
      {
        num % 2 && <ReduxPage />
      }
      <ReactReduxHookPage />
    </div>
  );
}

export default App;
