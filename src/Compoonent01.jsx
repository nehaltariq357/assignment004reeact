import React from 'react'

function Compoonent01() {
  return (
   <>
  <div class=' h-52 flex justify-center items-center'>
  <ul class='flex  justify-center items-center'>
    <li class='flex flex-col items-center font-bold'><i><img src="images/fully responsive.jpg" alt="Image 1" class="mb-2" /></i>
      <i class='fas fa-mobile-alt text-2xl'></i>
      Fully Responsive
      <p class='font-thin w-3/5'>
        This theme will look great on any device, no matter the size!
      </p>
    </li>
    <li class='flex flex-col items-center font-bold'><i><img src="images/bootstrap 5 ready.jpg" alt="" /></i>
      <i class='fab fa-bootstrap text-2xl'></i>
      Bootstrap 5 Ready
      <p class='font-thin w-3/5'>
        Featuring the latest build of the new Bootstrap 5 framework!
      </p>
    </li>
    <li class='flex flex-col items-center font-bold'><i><img src="images/easy to use.jpg" alt="" /></i>
      <i class='fas fa-cogs text-2xl'></i>
      Easy To Use
      <p class='font-thin w-3/5'>
        Easy to use with your own content, or customize the source file!
      </p>
    </li>
  </ul>
</div>

   </>
  )
}

export default Compoonent01