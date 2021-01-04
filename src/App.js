import React, { useState } from 'react'
import birthdays from './data'
import List from './List'
import NewInput from './newInput'

function App() {
	// create a state variable here
	const [people, setPeople] = useState(birthdays);

	// this should clear all records
	function clearAllRecords() {
		setPeople([]);
  }

	return (
		<main>
			<section className="container">
				<h3><strong>Birthday List</strong></h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
        <NewInput />
			</section>
		</main>
	)
}

export default App