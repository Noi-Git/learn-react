import { useState } from 'react'
import { Users } from '../users'

const SearchLamaBasic = () => {
  const [query, setQuery] = useState('')

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        className='search'
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className='list'>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className='listItem' key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchLamaBasic
