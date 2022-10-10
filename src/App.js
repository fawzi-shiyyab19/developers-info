import { useReducer } from 'react';
import { Developer } from './components/Developer';
import './App.css';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';

function App() {
  const [users, dipatch] = useReducer(Developer, []);
  return (
    <div className="App">
      <DeveloperForm dispatch={dipatch} />
      <DeveloperList users={users} dispatch={dipatch} />
    </div>
  );
}

export default App;