import React from 'react'
import TodoItem from './TodoItem'
function Columns({title, items, onMove, status, addNewTask }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md w-1/3">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {status === 'New' && (
      <button 
        onClick={addNewTask} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Add Task
      </button>
    )}
    {items.map((item) => (
      <TodoItem key={item.id} item={item} onMove={onMove} />
    ))}
  </div>
  )
}

export default Columns
