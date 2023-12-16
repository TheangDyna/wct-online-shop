import React from "react";

export default function Send() {
  return (
    <div className="pt-6 px-6 py-6">
      <div className="flex py-6 px-6">
        <div className=" border w-1/2 px-4 py-4">
          <h1 className="text-2xl pb-5 text-center">Send Us A Message</h1>
          <div className="flex  focus-within:text-gray-600">
            <div className="  absolute pl-3 pt-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <input
              className="w-full h-6 pb-3  mb-4 pl-6 border pt-1 "
              id="username"
              type="text"
              placeholder="Your Email Address"
            />
          </div>

          <textarea
            className=" border  w-full py-1 h-[15rem] "
            id="username"
            type="text"
            placeholder="Your Email Address"
          />
          <div className="pt-4">
            <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
              Submit
            </button>
          </div>
        </div>

        {/* Flex 2 */}
        <div className="flex flex-col px-6 py-6 border w-1/2 ">
          <div className="py-4"></div>
          <div className="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 pr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <div className="mb-3">
              <div className="text-lg pb-4">Address</div>
              <p className="max-w-xs text-gray-500">
                Coza Store Center 8th floor, 379 Hudson St,New York, NY 10018 US
              </p>
            </div>
          </div>

          <div className="mb-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 pr-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>

            <div className="mb-3">
              <div className="pb-3 text-lg">Lets Talk</div>
              <div className="text-sky-400">+1 800 1236879</div>
            </div>
          </div>

          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 pr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <div className="mb-3">
              <div className="pb-3 text-lg">Sale Support</div>
              <div className="text-sky-400">contact@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
