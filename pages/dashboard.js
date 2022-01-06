import React from 'react'

import Courses from './courses'
function dashboard() {
    return (
        <div >
               <div className="flex flex-col  bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900">
               <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          <div className="py-5 text-center">
            <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white">John Doe</a>
            <span className="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
          </div>
        </div>

               </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 border border-gray-100 rounded-lg dark:bg-gray-900 dark:border-gray-900">
        



        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
          <div className="py-5 text-center">
            <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white">John Doe</a>
            <span className="text-sm text-gray-700 dark:text-gray-200">Software Engineer</span>
          </div>
        </div>

        </div>
        
        
        
        </div>
    )
}

export default dashboard
