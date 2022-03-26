import React from 'react'

const Panel = () => {
  return (
    <div className='p-2 border-2 rounded-lg'>
      <div className='flex gap-2 flex-col'>
        <h2 className="text-xl font-bold mb-6">Produc List</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  )
}

export default Panel