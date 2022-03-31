import {
  HomeIcon,
  InformationCircleIcon,
  LockClosedIcon,
  QuestionMarkCircleIcon,
  CodeIcon,
} from '@heroicons/react/solid'
import React from 'react'
import Link from 'next/link'

const Navbar = (props: any) => {
  const { index } = props

  console.log(index)

  return (
    <nav className="w-full border-b border-gray-800 bg-opacity-20 px-2 py-2.5 backdrop-blur-sm backdrop-filter sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center">
          <LockClosedIcon className="mr-3 h-10 w-10" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Passphrase Generator
          </span>
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="mt-4 flex flex-col  md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className={
                  'rounded py-2 pr-4 pl-3  md:block md:bg-transparent md:p-0' +
                  (index == 0 ? ' text-white' : ' text-gray-600')
                }
                aria-current="page"
              >
                <div className="flex items-center">
                  <HomeIcon className="mr-1 h-4 w-4" />
                  Home
                </div>
              </a>
            </li>

            <li>
              <a
                href="/help"
                className={
                  'rounded py-2 pr-4 pl-3  md:block md:bg-transparent md:p-0' +
                  (index == 1 ? ' text-white' : ' text-gray-600')
                }
              >
                <div className="flex items-center">
                  <QuestionMarkCircleIcon className="mr-1 h-4 w-4" />
                  Help
                </div>
              </a>
            </li>

            <li>
              <a
                href="/about"
                className={
                  'rounded py-2 pr-4 pl-3  md:block md:bg-transparent md:p-0' +
                  (index == 2 ? ' text-white' : ' text-gray-600')
                }
              >
                <div className="flex items-center">
                  <InformationCircleIcon className="mr-1 h-4 w-4" />
                  About
                </div>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/ypatel2022/passphrase-generator"
                className="rounded py-2 pr-4 pl-3 text-gray-600 md:block md:bg-transparent md:p-0"
              >
                <div className="flex items-center">
                  <CodeIcon className="mr-1 h-4 w-4" />
                  GitHub
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
