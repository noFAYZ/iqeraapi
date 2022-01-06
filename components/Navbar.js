import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

function Navbar(ctx) {
  const router = useRouter();

  const jwt = parseCookies(ctx).token;
  if (jwt==null) {
              
  return (
    <div>
      <div className="px-10 py-3 mx-auto md:px-29 lg:px-20 shadow-md w-full bg-white">
        <div className="relative flex  items-center grid-cols-2 lg:grid-cols-3">
          <ul className="flex items-center space-x-8 lg:flex">
            <li className="hover:bg-slate-100">
           
              <a href="/" aria-label="Our product" title="Our product" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 {}" className={router.pathname === '/about' ? 'text-emerald-800' : ''}>About</a>
              </li>
            <li><a href="/" aria-label="Our product" title="Our product" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" className={router.pathname === '/courses' ? 'text-emerald-800' : ''}>Courses</a></li>
            <li><a href="/" aria-label="Product pricing" title="Product pricing" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400" className={router.pathname === '/about' ? 'text-red' : ''}>Pricing</a></li>
          </ul>
          <a href="/" aria-label="Company" title="Company" className="inline-flex items-center lg:mx-auto">
            <img href="/" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">IQera LMS</span>
          </a>
          <ul className="flex items-center ml-auto space-x-8 lg:flex">
            <Link
              activeClassName="active"
              to="/login"
              href="/login"
              smooth={true}
              duration={500}
              offset={50}
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >Sign in
            </Link>
            <li className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-yellow-600 hover:bg-black hover:text-white focus:shadow-outline focus:outline-none">
              <Link
                activeClassName="active"
                to="/signup"
                href="/signup"
                smooth={true}
                duration={500}
                offset={50}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-white focus:shadow-outline focus:outline-none"
              >Sign up
              </Link>
            </li>
          </ul>
          {/* Mobile menu */}
          <div className="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50">
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
              </svg>
            </button>
            {/* Mobile menu dropdown 
<div class="absolute top-0 left-0 w-full">
  <div class="p-5 bg-white border rounded shadow-sm">
    <div class="flex items-center justify-between mb-4">
      <div>
        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
          <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
        </a>
      </div>
      <div>
        <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <nav>
      <ul class="space-y-4">
        <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Product</a></li>
        <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Features</a></li>
        <li><a href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Pricing</a></li>
        <li><a href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Sign in</a></li>
        <li>
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
*/}
          </div>
        </div>
      </div>

    </div>
  )
  }
  else{
    return (
      <div>
        <div className="px-10 py-3 mx-auto md:px-29 lg:px-20 shadow-md w-full bg-white">
          <div className="relative flex  items-center grid-cols-2 lg:grid-cols-3">
            <ul className="flex items-center space-x-8 lg:flex">
              <li className="hover:bg-slate-100">
             
              <a href="/" aria-label="Company" title="Company" className="inline-flex items-center lg:mx-auto">
              <img href="/" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">IQera LMS</span>
            </a>
                </li>
             
            </ul>
            
            <ul className="flex items-center ml-auto space-x-8 lg:flex">
           
              <li className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-yellow-600 hover:bg-black hover:text-white focus:shadow-outline focus:outline-none">
                <Link
                  activeClassName="active"
                  to="/signup"
                  href="/signup"
                  smooth={true}
                  duration={500}
                  offset={50}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-white focus:shadow-outline focus:outline-none"
                >Log out
                </Link>
              </li>
            </ul>
            {/* Mobile menu */}
            <div className="ml-auto lg:hidden">
              <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50">
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
                  <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
                  <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
                </svg>
              </button>
              {/* Mobile menu dropdown 
  <div class="absolute top-0 left-0 w-full">
    <div class="p-5 bg-white border rounded shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <div>
          <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
            <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
          </a>
        </div>
        <div>
          <button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav>
        <ul class="space-y-4">
          <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Product</a></li>
          <li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Features</a></li>
          <li><a href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Pricing</a></li>
          <li><a href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Sign in</a></li>
          <li>
            <a
              href="/"
              class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  */}
            </div>
          </div>
        </div>
  
      </div>
    )
  }

}

export default Navbar
