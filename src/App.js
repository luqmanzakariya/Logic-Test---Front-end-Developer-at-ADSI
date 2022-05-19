// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(9)

  const generateArray = (number) => {
    let arr = []
    for (let i = 0; i<number; i++){
      let arr2 = []
      for (let j=0; j<number; j++){
        arr2.push([])
      }
      arr.push(arr2)
    }

    for (let i=0; i<arr.length; i++){
      if (i === 0){
        arr[i][0] = 1
        arr[i][arr.length-1] = arr.length
      }
      else if (i === arr.length-1){
        arr[i][0] = 1
        arr[i][arr.length-1] = arr.length
      } else {
        arr[i][i] = i+1
        arr[arr.length-1-i][i] = i+1
      }
    }

    console.log("arr", arr)
    return arr
  }

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="tentacles">Number of columns you want to generate (Maximum 20)</label>
        <div style={{display: 'flex', paddingTop: '10px'}}>
          <input value={number} onChange={(e) => {if (e.target.value <= 20 && e.target.value > 0) setNumber(e.target.value)}} type="number" style={{marginRight: '16px'}}/>
        </div>
        <table style={{width: '100%', marginTop: '60px'}}>
          {generateArray(number).map((val) => 
          <tr>
            {val.map((x) => 
              <th>{x}</th>
            )}
          </tr>
          )}
        </table>
      </header>
    </div>
  );
}

export default App;
