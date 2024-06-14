import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Barchart from './components/chart/Barchart.jsx'
import PieChart from './components/chart/PieChart.jsx'
import EmployeeTable from "./components/table/Employee"
import AssociateCompany from "./components/table/AssociateCompany"
import Sidebar from "./Sidebar.jsx"
import Navbar from './Navbar.jsx'
import "./App.css"
import { MdEmojiPeople } from "react-icons/md";
import { IoIosThumbsUp } from "react-icons/io";
import { GiStack } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
function App() {
  const [count, setCount] = useState(0)
  const [clients,setClients]=useState(50);
  const [projects,setProjects]=useState(100);
  const [techStack,setTechStack]=useState(75);
  const [Countries,setCountries]=useState(5);
  return (
    <>
<Navbar/>
<Sidebar />
<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 mb-4">
         <div className="flex items-center justify-center h-32 rounded-lg bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <MdEmojiPeople className='h-20 w-20 text-gray-700' />
            <div>
            <h1 className=' md:text-2xl text-gray-700  font-serif'>Clients</h1>
            <h1 className='md:text-4xl text-gray-700 font-serif'>{clients}+</h1>
            </div>
         </div>
         <div className="flex items-center justify-center h-32 rounded-lg  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700">
             <GoGoal className='h-20 w-20 text-gray-700' />
            <div>
            <h1 className='md:text-2xl text-gray-700 font-serif'>Projects</h1>
            <h1 className='md:text-4xl text-gray-700 font-serif'>{projects}+</h1>
            </div>
         </div>
         <div className="flex items-center justify-center h-32 rounded-lg bg-gradient-to-br from-pink-200 to-orange-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-400">
             <GiStack className='h-20 w-20 text-gray-700' />
            <div>
            <h1 className='md:text-2xl text-gray-700 font-serif'>Tech stack</h1>
            <h1 className='md:text-4xl text-gray-700 font-serif'>{techStack}+</h1>
            </div>
         </div>
         <div className="flex items-center justify-center h-32 rounded-lg bg-gradient-to-br from-green-200 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
             <IoIosThumbsUp className='h-20 w-20 text-gray-700' />
            <div>
            <h1 className='md:text-2xl text-gray-700 font-serif'>Countries</h1>
            <h1 className='md:text-4xl text-gray-700 font-serif'>{Countries}+</h1>
            </div>
         </div>
      </div>
      <div className=" lg:flex p-2 items-center justify-center h-full w-full mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <Barchart  />
         <PieChart />
      </div>
      <div className=" flex-col md:grid md:grid-cols-2 gap-4 mb-4">
         <div className="flex items-center w-full justify-center rounded bg-gray-50  dark:bg-gray-800">
         {/* Table1 */}
         <EmployeeTable/>
         </div>
         <div className="flex items-center justify-center rounded   dark:bg-gray-800">
        {/* Table 2 */}
        <AssociateCompany/>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800">
           
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50  dark:bg-gray-800">
           
         </div>
      </div>
      {/* <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div> */}
   </div>
</div>

    </>
  )
}

export default App
