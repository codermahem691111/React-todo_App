import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Columns from './components/Columns'
const initialTodos = [
  { id: 1, title: 'Task 1', description: 'Description 1', status: 'New', color: 'border-blue-500' },
  { id: 2, title: 'Task 2', description: 'Description 2', status: 'New', color: 'border-blue-500' },
];
function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(initialTodos);

  const moveTodo = (id, newStatus) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: newStatus, color: getColor(newStatus) } : todo
    ));
  };

  const addNewTask = () => {
    const title = prompt('Enter task title:');
    const description = prompt('Enter task description:');
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: 'New',
      color: 'border-blue-500',
    };
    setTodos([newTask, ...todos]);
  };

  const getColor = (status) => {
    switch (status) {
      case 'New': return 'border-blue-500';
      case 'Ongoing': return 'border-orange-500';
      case 'Done': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  const filterTodos = (status) => todos.filter(todo => todo.status === status);   
  return (
    <>
    <h4 className='text-3xl  font-[700] text-violet-400 mb-[30px]'>This is todo app</h4>
    <div className='flex flex-row justify-center'>
    <Columns title="New" items={filterTodos('New')} onMove={moveTodo} status="New" addNewTask={addNewTask} />
      <Columns title="Ongoing" items={filterTodos('Ongoing')} onMove={moveTodo} status="Ongoing" />
      <Columns title="Done" items={filterTodos('Done')} onMove={moveTodo} status="Done" />
  </div>
    </>
  )
}

export default App
