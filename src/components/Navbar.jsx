import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src="https://media.istockphoto.com/id/1297644870/es/foto/persona-en-la-universidad-o-escuela-de-posgrado-imagen-de-alta-resoluci%C3%B3n.jpg?b=1&s=612x612&w=0&k=20&c=l0OuZ4Aev2TjtpL7q6i1r1y1cGl7wEo8Ft37YsssW_k=" alt="" srcset="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar