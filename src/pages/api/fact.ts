// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  fact: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const facts = 
  [

`Cats have flexible bodies and can rotate their ears 180 degrees and rotate their heads 180 degrees as well.`,
`A group of cats is called a "clowder" or a "glaring".`,
`Domestic cats are believed to have descended from African wildcats.`,
`A cat's sense of smell is about 14 times stronger than a human's.`,
`Cats have retractable claws that they use for hunting and climbing.`,
`The world's richest cat, Blackie, inherited a fortune of £7 million from his owner in 1988.`,
`A cat's purr can have therapeutic benefits, including lowering stress and reducing blood pressure.`,
`Cats have a specialized collar bone that allows them to always land on their feet when they fall.`,
`Most cats are lactose intolerant and should not be fed dairy products.`,
`The oldest known cat lived to be 38 years old!`,

]

  const responseIndex = Math.floor(Math.random() * facts.length);
  const responseFact = facts[responseIndex]

  res.status(200).json({ fact: responseFact })
}
