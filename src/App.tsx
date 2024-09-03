import './App.css'
import { useState } from 'react'
import Students from './components/School/Students';
import Teacher from './components/School/Teacher';

function App() {
  const [age, setAge] = useState<number>(10);
  // initialState 
  const updateAge = () => {
    setAge(age + 1);
  }

  return (
    <>
      <div>
        <p>Learn state</p>
        <button onClick={() => updateAge()}>
          +
        </button>
        {age}
        <button onClick={() => setAge(age - 1)}>
          -
        </button>

      {/* <Students   /> */}
      <Teacher />
      </div>

    </>
  )
}

export default App;
