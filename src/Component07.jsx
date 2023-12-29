import React from 'react'

function Component07() {
  return (
    
    <>
    {/* <div className='bg-red-200 h-36'>
  
      <ul className='m-0 flex w-2/4'> 
        <li className='capitalize'>about</li>
        <li className='capitalize'>contact</li>
        <li className='capitalize'>terms of use</li>
        <li className='capitalize'>provacy policy</li>
        </ul>
        <div className='w-2/4'>
          right
        </div>
  
    </div> */}

<div className='flex'>
  <div className='h-40  w-2/4 py-5'>
  
    <ul className='capitalize flex justify-center gap-x-5	text-colo text-blue-500 underline 	'>
      <li>about</li>
      <li>contact</li>
      <li>terms of use</li>
      <li>privacy policy</li>
    </ul>
    <p className='capitalize flex justify-center '>your website 2023.all right reserved</p>

  </div>

  <div className=' w-2/4 	'>
    <img className='pl-52 pt-16	' src="images/icons.jpg" alt="" />
 
  </div>
 </div>

    
    </>
  )
}

export default Component07