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

      <Button
        onClick={() => setGood(good + 1)}
        text='positive'
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text='negative'
      />

      <Stats good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

const Header = () => {
    return (
        <>
        <h1>
            Unicafe feedback
        </h1>
        <h3>
          Gibs dem feedback pls
        </h3>
        </>
    )
}

const Stats = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <>
      <h4>
        No feedback yet!
      </h4>
      </>
    )
  } else {
    return (
      <div>
      <h2>
        Stats for nerds
      </h2>
      <table>
        <tbody>
        <tr>
          <Statistic text='Good' value={props.good} />
        </tr>
      <tr>
        <Statistic text='Neutral' value={props.neutral} />
      </tr>
      <tr>
        <Statistic text='Bad' value={props.bad} />
      </tr>
      <tr>
        <Statistic text='Total feedback given' value={props.good + props.neutral + props.bad} />
      </tr>
      <tr>
        <Statistic text='Average score' value={props.good*1 + props.neutral*0 + props.bad*(-1)} />
      </tr>
      <tr>
        <Statistic text='Positive feedback' value={(100*props.good/(props.good + props.neutral + props.bad)).toString().concat(' %')}/>
      </tr>
      </tbody>
      </table>
      </div>
  )
  }
  
}

const Statistic = (props) => {
  return (
    <>
    <td>
    {props.text}
    </td>
    <td>
    {props.value}
    </td>
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