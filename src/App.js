import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';
import Edit from './Components/edit/Edit';

function App() {
  return (
    <div className="App">
      <h1 className='todo'>todo App</h1>
    <AddTask/>
    <TaskList/>
    
    </div>
  );
}

export default App;
