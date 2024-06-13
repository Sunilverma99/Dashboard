import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://www.marklytics.co.uk/" className="flex ms-2 md:me-24">
          <img src="https://www.marklytics.co.uk/wp-content/uploads/2023/12/logomark0.png" className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"></span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="data:image/jpeg;base64,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" alt="user photo"/>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Sunil verma
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  sunilverma99706@gmail.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Profile</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar