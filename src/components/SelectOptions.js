import React from 'react'

function SelectOptions({products}) {
  return (
    <div>
      <div className=" h-7  sm:h-10 border  border-gray-300  mt-2 rounded-md">
        <select
          class="h-full z-10 w-4/6  rounded-md border border-gray-300 bg-transparent py-0 pl-2 pr-7 sm:text-sm"
        >
            <option className='bg-gray-500'>Choose an option</option>
                {
                    products.map((item,idex) =>(
                        <option>{item}</option>
                    ))
                }
        </select>
      </div>
    </div>
  )
}

export default SelectOptions
