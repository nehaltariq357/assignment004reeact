import React from 'react'

function Nav() {
  return (
<>

<nav className=" py-2">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-black pl-36">Logo</div>
    <ul className="flex space-x-4">
      <li>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </li>
    </ul>
  </div>
</nav>




</>
  )
}

export default Nav