/*
Initial Setup:
  - Display the list fruit in the UI.
  - Use the provided input fields.
  - As the user types into the input, filter the displayed list to include only those items (real-time filtering)
  - the list should update as soon as the user types into the search box
  - display a friendly message if no items match the search term.
*/
const fruits = [
  'Apple',
  'Apricot',
  'Banana',
  'Blueberry',
  'Cherry',
  'Cranberry',
  'Date',
  'Dragonfruit',
  'Elderberry',
  'Fig',
  'Grape',
  'Grapefruit',
]
console.log(fruits)

import { useState } from 'react'

const SearchFruits = () => {
  const [fruitsData, setFruitsData] = useState(fruits)
  console.log(typeof fruitsData)

  return (
    <div>
      <input
        type='text'
        placeholder='Search here...'
        // onChange={handleInputChange}
        onChange={(e) => setFruitsData(e.target.value)}
      />

      {fruitsData
        .filter((fruit) => fruit.toLowerCase().includes(fruitsData))
        .map((fruit, i) => {
          return <p key={i}>{fruit}</p>
        })}
    </div>
  )
}

export default SearchFruits
