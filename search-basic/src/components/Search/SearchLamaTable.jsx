// eslint-disable-next-line react/prop-types
const SearchLamaTable = ({ data }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className='tableSpace'>name</th>
            <th className='tableSpace'>surname</th>
            <th className='tableSpace'>email</th>
          </tr>

          {/* eslint-disable-next-line react/prop-types */}
          {data.map((item) => (
            <tr key={item.id}>
              <td className='tableSpace'>{item.first_name}</td>
              <td className='tableSpace'>{item.last_name}</td>
              <td className='tableSpace'>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SearchLamaTable
