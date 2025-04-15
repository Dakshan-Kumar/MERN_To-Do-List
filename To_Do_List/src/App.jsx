import { useState } from 'react'
import './App.css'

function App() {
const [Search, setSearch] = useState('');

  return (
    <div>
      <header>
        To Do List
      </header>
     < div >
      <Search search={Search} setSearch={setSearch} />
      </div>
    </div>
  )
}

export default App
