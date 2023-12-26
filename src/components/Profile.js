import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";

function Profile() {
  return (
    <div>
        <div className="flex">
            <div className="w-2/12 ">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
            <div className="w-10/12 ml-4 sm:ml-1 ">
                <div className=" flex justify-between">
                    <div>
                        <h1 className="font-semibold text-lg">Roth Mony</h1>
                    </div>
                    <div className="flex font-semibold text-xl text-yellow-500">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarHalfSharp />
                    </div>
                </div>
                <div className="mt-5">
                    <p>Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
