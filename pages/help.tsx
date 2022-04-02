import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'

const help = () => {
  return (
    <div>
      <Head>
        <title>Passphrase Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar index={1} />
      help
    </div>
  )
}

export default help
