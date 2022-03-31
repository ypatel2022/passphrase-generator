import diceware from '../../../../diceware.swedish.json'

export default async (req, res) => {
  let { dicerolls } = req.query

  dicerolls = dicerolls.split(',')

  let words = ''

  // find dicerolls in diceware
  for (let i = 0; i < dicerolls.length; i++) {
    // get the word
    if (i != dicerolls.length - 1) {
      words += diceware[dicerolls[i]] + ' '
    } else {
      words += diceware[dicerolls[i]]
    }
  }

  let response = { words: words }

  res.status(200).json(response)
}
