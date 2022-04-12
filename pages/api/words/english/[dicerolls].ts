import diceware from '../../../../diceware.english.json'

export default async (req: any, res: any) => {
  // Get the dice rolls from url
  let { dicerolls } = req.query

  // split the dice rolls into an array
  dicerolls = dicerolls.split(',')

  let words = ''

  // find dicerolls in diceware
  for (let i = 0; i < dicerolls.length; i++) {
    // get the word
    if (i != dicerolls.length - 1) {
      // @ts-ignore
      words += diceware[dicerolls[i]] + ' '
    } else {
      // @ts-ignore
      words += diceware[dicerolls[i]]
    }
  }

  // send response to front end with passphrase
  let response = { words: words }

  res.status(200).json(response)
}
