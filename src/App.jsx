import React, { useState } from 'react'

import './App.css'

import Output from './components/Output'
import Buttons from './components/Buttons';

var result = false

function App() {

  const [num, setNum] = useState('')
  const [operator, setOperator] = useState()
  const [oldNum, setOldNum] = useState()

  function imputNum(e) {
    console.log('result entrada imputNum: ' + result)
    if (result === true) {
      setOldNum(num)
      setNum(e.target.value)
      result = false
      console.log('result dentro If true depois clear: ' + result)
      console.log('num if true: ' + num)
    } else {
      setNum(num + e.target.value)
      console.log('result imput2: ' + result)
      console.log('setnum imput2: ' + num + e.target.value)
    }
  }

  function clear() {
    setNum('')
    setOldNum('')
    result = false
    console.log('result clear: ' + result)
    console.log('num dentro clear: ' + num)
  }

  function percent() {
    setNum(num / 100)
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    if(result===false){
      setNum('')
    }
  }

  function calculate() {
    let aux = num
    console.log('result entrada calculate:' + result)
          
    if (operator === '/') {
    setNum(parseFloat(oldNum) / parseFloat(num))
    } else if (operator === 'X') {
            setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === '-') {
            setNum(parseFloat(oldNum) - parseFloat(num))
    } else if (operator === '+') {
            setNum(parseFloat(oldNum) + parseFloat(num))
    }
    else if (operator === 'sqrt') {
      setNum(parseFloat(Math.sqrt(oldNum)))
    }
    else if (operator === 'sin') {
      setNum(parseFloat(Math.sin(oldNum)))
    }
    else if (operator === 'cos') {
      setNum(parseFloat(Math.cos(oldNum)))
    }
    else if (operator === 'tan') {
      setNum(parseFloat(Math.tan(oldNum)))
    }
    else if (operator === 'pi') {
      setNum(parseFloat(Math.PI))
    }
    else if (operator === 'e') {
      setNum(parseFloat(Math.E))
    }
    else if (operator === 'log') {
      setNum(parseFloat(Math.log(oldNum)))
    }
    else if (operator === 'pow') {
      setNum(parseFloat(Math.pow(oldNum,num)))
    }
    setOldNum(aux)
    result = true
    console.log('result salída calculate = ' + result)
  }

  return (
    <div className="wrapper">
      <div className="calculator-grid">
        {
          <Output oldNum={oldNum} num={num} />
        }
        {
          <Buttons
            imputNum={imputNum}
            clear={clear}
            percent={percent}
            operatorHandler={operatorHandler}
            calculate={calculate}
          />
        }
      </div>
    </div>
  )
}

export default App
