import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Counters good= {good, setGood} neutral = {neutral, setNeutral} bad = {bad, setBad}/>
    </div>
  )
}

const Header = () => {
    return (
        <>
        <h1>
            Unicafe feedback
        </h1>
        </>
    )
}

const Counters = (props) => {
  return (
      <>
      <h3>
        Give feedback here!
      </h3>
      <Button
        onClick={() => props.good.setGood(props.good.good + 1)}
        text='positive'
      />
      <Button
        onClick={() => props.bad.setBad(props.bad.bad + 1)}
        text='negative'
      />
      <Button
        onClick={() => props.neutral.setNeutral(props.neutral.neutral + 1)}
        text='enemmän lihaa'
      />
      </>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


ReactDOM.render(<App />, 
  document.getElementById('root')
)