import React from "react"

export default function Fact() {
const [fact, setFact] = React.useState("")
React.useEffect(() => {

	(async () => {
		const request = await fetch('https://green-rledqqi9m-axelvm.vercel.app/api/fact')
		const response = await request.json()
		setFact(response.fact)
	})()
})


  return (
    <>
		<div>
			fact: {fact}
		</div>
    </>
  )
}



