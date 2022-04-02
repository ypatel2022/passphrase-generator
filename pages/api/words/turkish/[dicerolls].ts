import diceware from '../../../../diceware.turkish.json'

export default async (req: any, res: any) => {
  let { dicerolls } = req.query

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

  let response = { words: words }

  res.status(200).json(response)
}
