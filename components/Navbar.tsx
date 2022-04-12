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

  return (
    <nav className="w-full border-b border-gray-800 bg-opacity-20 px-2 py-2.5 backdrop-blur-sm backdrop-filter sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* logo */}
        <a href="/" className="flex items-center">
          <LockClosedIcon className="mr-3 h-10 w-10" />

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Passphrase Generator
          </span>
        </a>

        {/* navbar */}
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          {/* links */}
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="/"
                className={
                  'rounded py-2 pr-4 pl-3  md:block md:bg-transparent md:p-0' +
                  (index == 0
                    ? ' text-white'
                    : ' text-gray-600 hover:text-gray-400')
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
                  (index == 1
                    ? ' text-white'
                    : ' text-gray-600 hover:text-gray-400')
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
                  (index == 2
                    ? ' text-white'
                    : ' text-gray-600 hover:text-gray-400')
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
                className="rounded py-2 pr-4 pl-3 text-gray-600 hover:text-gray-400 md:block md:bg-transparent md:p-0"
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
