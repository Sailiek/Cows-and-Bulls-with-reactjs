import React from 'react'

function Hello() {
  return (
    <div   className='hello'>
      <h2>Bulls and Cows</h2>
        <p>
            <span><b>Rules</b></span>
            <ol>
                 <li>you have to guess the code composed by 4 numbers </li>
                 <li>a correct number in the correct place = bull</li>
                 <li>a correct number in the wrong place = cow</li>
            </ol>
        </p>
    </div>
  )
}

export default Hello