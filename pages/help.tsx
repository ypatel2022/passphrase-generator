import { ClipboardIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import TableRow from '../components/TableRow'

const help = () => {
  return (
    <div className="text-2xl text-white">
      <Head>
        <title>Passphrase Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar index={1} />
      <main className="mt-20 w-full flex-1 flex-col justify-center px-20 text-center ">
        {/* how to use website */}
        <h1 className="text-6xl font-bold">
          How to Generate your First Passphrase:
        </h1>

        {/* present options */}
        <p className="card">
          There are a couple of different options to choose from in the
          generator. It can be confusing but dont worry, this page will explain
          how to use the generator.
        </p>

        <p className="card">
          The first option is the length of your passphrase. This is the number
          of words you want in your passphrase. You can change it to be any
          number between 1 and 100.
          {/* interactive demo text */}
          <label className="mt-4 block">
            <label htmlFor="passphraseLength">Passphrase Length</label>
            <input
              className="mt-5 ml-5 rounded text-center text-2xl text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              type="number"
              id="passphraseLength"
              name="passphraseLength"
              min="1"
              max="100"
              defaultValue={6}
            />
          </label>
        </p>

        <p className="card">
          The second option is the language you want to use to generate your
          passphrase. From the dropdown, there are 5 languages available:
          English, Latin, Swedish, Romanian, and Turkish.
          {/* example language dropdown */}
          <label className="mt-4 block">
            <label className="text-left" htmlFor="passphraseLanguage">
              Passphrase Language
            </label>
            <select
              className="mt-5 ml-5 rounded text-center text-2xl text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              id="passphraseLanguage"
              name="passphraseLanguage"
              defaultValue={'english'}
            >
              <option value="english">English</option>
              <option value="latin">Latin</option>
              <option value="swedish">Swedish</option>
              <option value="romanian">Romanian</option>
              <option value="turkish">Turkish</option>
            </select>
          </label>
        </p>

        <p className="card flex flex-col items-center justify-center">
          Additionally, you have the option to add special characters into your
          passphrase. This makes it so that certain letters will be replaced
          with a similar looking character from your keyboard. This can help
          increase the security of your passphrase a lot.
          {/* example special character */}
          <label className="mx-auto mt-8 mb-2 flex items-center">
            <label htmlFor="specialCharacters" className="mr-3">
              Add Special Characters
            </label>
            <input
              id="specialCharacters"
              aria-describedby="specialCharacters"
              name="specialCharacters"
              type="checkbox"
              // @ts-ignore
              // set default value of the checkbox to what it was last time
              defaultChecked={false}
              className="focus:ring-3 h-8 w-8 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-blue-600"
            />
          </label>
          {/* create a table of special characters */}
          <h1 className="mt-8 mb-1 text-xl">Character Replacements</h1>
          <div className="overflow-x-auto rounded-md shadow-md">
            <table className="text-left text-sm text-gray-400">
              <thead className="bg-gray-800 text-xs uppercase text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Character
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Replacement
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow character={'A'} replacement={'@'} />
                <TableRow character={'B'} replacement={'8'} />
                <TableRow character={'C'} replacement={'('} />
                <TableRow character={'E'} replacement={'3'} />
                <TableRow character={'G'} replacement={'6'} />
                <TableRow character={'H'} replacement={'#'} />
                <TableRow character={'I'} replacement={'!'} />
                <TableRow character={'L'} replacement={'1'} />
                <TableRow character={'O'} replacement={'0'} />
                <TableRow character={'S'} replacement={'$'} />
                <TableRow character={'T'} replacement={'+'} />
                <TableRow character={'Z'} replacement={'2'} />
              </tbody>
            </table>
          </div>
        </p>

        <p className="card flex flex-col items-center justify-center">
          Finally, you have the option to capitalize the first letter of each
          word in your passphrase. Doing this can increase the security of your
          passphrase by a lot. It is also recommended to put capitals in other
          places rather than the first letter of each word.
          {/* example special character */}
          <label className="mx-auto mt-8 mb-2 flex items-center">
            <label htmlFor="specialCharacters" className="mr-3">
              Capitalize First Letter
            </label>
            <input
              id="specialCharacters"
              aria-describedby="specialCharacters"
              name="specialCharacters"
              type="checkbox"
              // @ts-ignore
              // set default value of the checkbox to what it was last time
              defaultChecked={false}
              className="focus:ring-3 h-8 w-8 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-blue-600"
            />
          </label>
        </p>

        <p className="card flex flex-col items-center justify-center">
          After you are done with the options, click the generate button. This
          will generate your passphrase for you.
          {/* example generate button */}
          <button className="mt-8 mr-2 mb-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800">
            Generate
          </button>
        </p>

        <p className="card flex flex-col items-center justify-center">
          Below you will see your generated passphrase. You can click on the
          textarea to edit your passphrase however you want. You can also copy
          your passphrase by clicking the copy button after you are done.
          {/* button to copy passphrase */}
          <button className="mt-8 mr-2 mb-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800">
            <div className="flex items-center">
              <ClipboardIcon className="mr-1 h-4 w-4" />
              Copy to Clipboard
            </div>
          </button>
        </p>
      </main>
    </div>
  )
}

export default help
