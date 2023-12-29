import React from 'react'

function Component06() {
  return (
    <div className="bg-cover bg-center h-56 flex items-center" style={{ backgroundImage: 'url("images/bg-image.jpg")' }}>
    <div className="text-white text-center mx-auto flex flex-col items-center">
      <h1 className="text-2xl mb-4	">ready to get started?sign up now</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="bg-gray-200 px-4 text-black py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Email Address" 
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-sky-700 text-white px-4 py-2 ml-2 rounded-md"
        >
          submit
        </button>
      </div>
    </div>
  </div>
  )
}

export default Component06