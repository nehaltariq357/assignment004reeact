import React from 'react'

function Component05() {
  return (
//   
<div class='h-96 flex justify-center items-center'>
  <ul class='flex justify-evenly items-center'>
  <li class='flex flex-col items-center font-bold'>
      <i><img className='rounded-full' src="images/testimonials-1.jpg" height= '' width='96' alt="" /></i>
      <i class='fas fa-mobile-alt capitalize'> margret e.</i>
    
      <p class='font-thin w-3/5'>
        This theme will look great on any device, no matter the size!
      </p>
    </li>
    <li class='flex flex-col items-center font-bold'><i>what people are saying...</i>
      <i><img className='rounded-full' src="images/testimonials-2.jpg" height= '' width='96' alt="" /></i>
      <div class="heading-line">
      <i class='fas fa-mobile-alt capitalize'> fred s.</i>
      </div>
      <p class='font-thin w-3/5'>
        Featuring the latest build of the new Bootstrap 5 framework!
      </p>
    </li>
    <li class='flex flex-col items-center font-bold'>
    <i><img className='rounded-full' src="images/testimonials-3.jpg" height= '' width='96' alt="" /></i>
    <i class='fas fa-mobile-alt capitalize'> sarah w.</i>
     
      <p class='font-thin w-3/5'>
        Easy to use with your own content, or customize the source file!
      </p>
    </li>
  </ul>
</div>
  )
}

export default Component05