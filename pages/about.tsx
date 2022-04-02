import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const about = () => {
  return (
    <div className="text-2xl text-white">
      <Head>
        <title>Passphrase Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar index={2} />

      {/* explain how passphrases work */}
      <main className="mt-20 w-full flex-1 flex-col justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">What Are Passphrases?</h1>
        <p className="m-auto mt-8 max-w-xl">
          A passphrase is a lengthier than a typical password, easy to remember,
          and tough to crack string of words used for authentication. Passwords
          typically range from eight to sixteen characters in length, however
          they can be as long as 100 characters or more.
        </p>

        <h1 className="mt-16 text-6xl font-bold">
          How Are Passphrases Generated?
        </h1>
        <p className="m-auto mt-8 max-w-xl">
          A passphrase is a lengthier than a typical password, easy to remember,
          and tough to crack string of words used for authentication. Passwords
          typically range from eight to sixteen characters in length, however
          they can be as long as 100 characters or more.
        </p>
      </main>
    </div>
  )
}

export default about
