import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
function TodoItem({item, onMove}) {
  return (
    <div>
       <div className={`border-2 p-4 rounded-md mb-4 ${item.color}`}>
    <Menu menuButton={<MenuButton className="w-full text-left">
      <h3 className="font-bold">{item.title}</h3>
      <p>{item.description}</p>
    </MenuButton>}>
     <div className='bg-blue-700 rounded-[15px] shadow-sm w-[360px] h-[180px]'>   
      {item.status !== 'New' && (
        <MenuItem className='mt-[20px]  py-[20px] text-[20px] text-white font-[700]' onClick={() => onMove(item.id, 'New')}>Move to <span className='px-[20px] py-[10px] bg-sky-400 rounded-[15px]'>new</span></MenuItem>
      )}
      {item.status !== 'Ongoing' && (
        <MenuItem className='mt-[20px]  py-[20px] text-[20px] text-white font-[700]' onClick={() => onMove(item.id, 'Ongoing')}>Move to <span className='px-[20px] py-[10px] bg-orange-400 rounded-[15px]'>Ongoing</span></MenuItem>
      )}
      {item.status !== 'Done' && (
        <MenuItem className='mt-[20px]  py-[20px] text-[20px] text-white font-[700]' onClick={() => onMove(item.id, 'Done')}>Move to<span className='px-[20px] py-[10px] bg-green-400 rounded-[15px]'>Done</span></MenuItem>
      )}
      </div>
    </Menu>
  </div> 
   
    </div>
  )
}

export default TodoItem
