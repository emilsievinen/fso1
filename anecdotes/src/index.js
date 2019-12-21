import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let votesArray = Array(6).fill(0)

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const setToValue = selected => {
    votesArray[selected] = votesArray[selected] +1
    console.log(votesArray)
  }

  return (
    <>
    <div>
      {props.anecdotes[selected]}
    </div>
    <Button onClick={() => setToValue(votesArray[selected])} text={'Vote for this anecdote'} />
    <Button onClick={() => setSelected((Math.floor(Math.random() * 6)))} text={'Another anecdote'} />
    </>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )
  
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)