import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import { ClipboardIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const Home: NextPage = ({ passphrase }: any) => {
  const { query } = useRouter()

  const [currentPassphrase, setCurrentPassphrase] = useState(passphrase)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  text-white">
      <Head>
        <title>Passphrase Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar index={0} />

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
      <main className="mt-20 w-full flex-1 flex-col justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Passphrase Generator</h1>

        {/* make a form with passphrase length */}
        <form className="mt-10 flex flex-col items-center justify-center">
          <label className="text-2xl">
            <label htmlFor="passphraseLength">Passphrase Length</label>
            <input
              className="mt-5 ml-5 rounded text-center text-2xl text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              type="number"
              id="passphraseLength"
              name="passphraseLength"
              min="1"
              max="100"
              defaultValue={query.passphraseLength || 6}
            />
          </label>

          {/* make a dropdown */}
          <label className="text-2xl">
            <label className="text-left" htmlFor="passphraseLanguage">
              Passphrase Language
            </label>
            <select
              className="mt-5 ml-5 rounded text-center text-2xl text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
              id="passphraseLanguage"
              name="passphraseLanguage"
              defaultValue={query.passphraseLanguage || 'english'}
            >
              <option value="english">English</option>
              <option value="latin">Latin</option>
              <option value="swedish">Swedish</option>
              <option value="romanian">Romanian</option>
              <option value="turkish">Turkish</option>
            </select>
          </label>

          {/* special character check mark */}
          <label className="mt-5 mb-2 flex items-center">
            <div className="mr-3">
              <label htmlFor="specialCharacters" className="text-2xl">
                Add Special Characters
              </label>
            </div>
            <div className="flex h-5 items-center">
              <input
                id="specialCharacters"
                aria-describedby="specialCharacters"
                type="checkbox"
                className="focus:ring-3 h-8 w-8 rounded border  border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-blue-600"
              />
            </div>
          </label>

          <button className="mt-5 mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Generate
          </button>
        </form>

        {/* display passphrase */}
        <div className="mt-10">
          <h1 className="text-4xl">Your Passphrase is:</h1>
          <textarea
            className="mt-5 min-h-fit w-1/2 rounded-sm border-b border-gray-800 bg-gray-900 bg-opacity-20 p-2 text-2xl backdrop-blur-sm backdrop-filter focus:outline-none focus:ring-4 focus:ring-gray-800"
            name=""
            id=""
            onChange={(e) => setCurrentPassphrase(e.target.value)}
            defaultValue={passphrase}
          ></textarea>
          <h1 className="text-gray-400">
            You can click to edit the passphrase
          </h1>
        </div>

        {/* button to copy passphrase */}
        <button
          onClick={() => navigator.clipboard.writeText(currentPassphrase)}
          className="mt-10 mb-10 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <div className="flex items-center">
            <ClipboardIcon className="mr-1 h-4 w-4" />
            Copy to Clipboard
          </div>
        </button>
      </main>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  let passphraseLength = context.query.passphraseLength
  let passphraseLanguage = context.query.passphraseLanguage

  console.log(passphraseLanguage)

  if (!passphraseLength) {
    passphraseLength = 6
  }
  if (!passphraseLanguage) {
    passphraseLanguage = 'english'
  }

  let diceRolls = ''

  // generate random 5 digit dice rolls
  for (let i = 0; i < passphraseLength; i++) {
    let dice = ''
    for (let j = 0; j < 5; j++) {
      dice += Math.ceil(Math.random() * 6)
    }
    diceRolls += dice + (i != passphraseLength - 1 ? ',' : '')
  }

  const res = await fetch(
    `http://localhost:3000/api/words/${passphraseLanguage}/${diceRolls}`
  )
  const data = await res.json()

  return {
    props: {
      passphrase: data.words,
    }, // will be passed to the page component as props
  }
}

export default Home