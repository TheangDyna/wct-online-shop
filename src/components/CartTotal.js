import React from 'react'
import ButtonCoupon from './ButtonCoupon'

function CartTotal() {
  return (
    <div className='w-96 m-auto '>
      <div className=' border border-gray-300 p-10'>
            <h1 className='font-bold'>CART TOTALS</h1>
            <div className='flex gap-3 mt-5'>
                <p> Subtotal: </p>
                <span>
                    $79.65
                </span>
            </div>
            <hr className='mt-3'/>
            <div className='py-3 w-full flex gap-5'>
                <div className=' w-1/5 h-60'>
                    <p> Shipping: </p>
                </div>
                <div className=' w-4/5'>
                    <p>There are no shipping methods available.
                         Please double check your address, or
                          contact us if you need any help. 
                    </p>
                    <p className='font-medium mt-3'>
                        CALCULATE SHIPPING
                    </p>
                    <div className=" relative  h-10 border border-gray-300  mt-2 rounded-md">
                        <div className=" absolute h-full w-11/12 left-0 flex items-center">
                            <select id="currency" name="currency" class="h-full z-10 w-full rounded-md border border-gray-600 bg-transparent py-0 pl-2 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                <option>Select a country</option>
                                <option>USA</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                    <div className='mt-2 '>
                        <input type="text" name="price"  class="block w-full rounded-md border outline-none bg-white bg-none border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  foc" placeholder="State / Country"/>
                        <input type="text" name="price"  class="block mt-2 w-full rounded-md border outline-none bg-white bg-none border-gray-300 py-1.5 pl-7 pr-20 text-gray-900  foc" placeholder="Postcode / Zip"/>
                    </div>
                    <div className='mt-3 flex justify-center'>
                        <ButtonCoupon
                            chidren={"UPDATE TOTALS"}
                        />
                    </div>
                </div>
            </div>
            <hr className='mt-3'></hr>
            <div className='flex gap-10 font-semibold mt-5'>
                <p> Total: </p>
                    <span>
                        $79.65
                    </span>
            </div>
            <div className='mt-6 flex justify-center'>
                <ButtonCoupon
                    chidren={"PROCEED TO CHECKOUT"}
                />
            </div>
      </div>
    </div>
  )
}

export default CartTotal
