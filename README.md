# Passphrase Generator

Passphrase Generator uses [diceware](https://en.wikipedia.org/wiki/Diceware) lists from multiple languages to generate passphrases for you. A passphrase is a password that consists of an easy to remember sequence of words. Passphrases are generally more secure than regular passwords because they contain more characters.

View the deployed app here: https://passphrase-generator-ypatel2022.vercel.app/

# Setup

_Note: These instructions assume that you already have [Node.js](https://nodejs.org/en/), npm (comes with Node.js), and [git](https://git-scm.com/downloads) setup on your computer._

Clone the repository on your terminal:

```sh
git clone https://github.com/ypatel2022/passphrase-generator.git
```

Change terminal directory to project directory:

```sh
cd passphrase-generator
```

Install relevant project dependencies in terminal:

```sh
npm install
```

Create a file called `.env.local` in the project directory and copy the following code:

```
ENDPOINT=http://localhost:3000
```

Start up the development server by typing:

```sh
npm run dev
```

Open up a web browser and visit:

```
http://localhost:3000/
```

<br/>

## Now you can edit the code inside the project and see live changes! 🚀

<br/>

For more information on developing Next.js websites, take a look at the [documentation](https://nextjs.org/docs). If you want to deploy your Next.js website, you can use [Vercel](https://vercel.com/) (the creators of Next.js!)
