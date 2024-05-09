import { useState } from 'react'
import './App.css'
import SearchLamaTable from './components/Search/SearchLamaTable'
import { Users } from './components/users'

function App() {
  const [query, setQuery] = useState('')
  const keys = ['first_name', 'last_name', 'email']
  // console.log(Users[0])
  // console.log(Users[0]['first_name'])

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }
  return (
    <>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setQuery(e.target.value)}
        className='search'
      />

      <SearchLamaTable data={search(Users)} />
    </>
  )
}

export default App
