import React from 'react'
import { Link } from 'react-router-dom';

const ProductOptions = () => {
  return (
    <div>
        <ul>
            <li className=' underline text-blue-500'><Link to='/dashboard'>All products</Link></li>
            <li className=' underline text-blue-500'><Link to='add'>Add products</Link></li>
            <li className=' underline text-blue-500'><Link to='edit'>Edit products</Link></li>
        </ul>
    </div>
  )
}

export default ProductOptions