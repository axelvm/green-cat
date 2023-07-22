import React from "react"
import styles from '@/styles/Fact.module.css'

export default function Fact() {
const [fact, setFact] = React.useState("")
React.useEffect(() => {

	(async () => {
		const request = await fetch('/api/fact')
		const response = await request.json()
		setFact(response.fact)
	})()
})


  return (
    <>
		<div className={styles.fact}>
			fact: {fact}
		</div>
    </>
  )
}



