import React from 'react'

const NavBar = ({profile}) => { 
  
  return (
    <div className='bg-[#5540af]'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <link href="/">
              <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
              </link>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <link href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#clients"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Clients</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Work</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">blog</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <link href="https://codewithabdur.github.io/CodeWithAbdur/" target="_blank"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</link>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  
    )
}

  


export default NavBar