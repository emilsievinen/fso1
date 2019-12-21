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
  let posFeed =-1
  if (props.good + props.neutral + props.bad == 0) {
    posFeed = 0

    return (
      <>
      <h4>
        No feedback yet!
      </h4>
      </>
    )
  } else {
    posFeed = 100*props.good/(props.good + props.neutral + props.bad)

    return (
      <>
      <h2>
        Stats for nerds
      </h2>
      <p>
        Good : {props.good}
      <p/>
      <p>
        Neutral : {props.neutral}
      </p>
        Bad : {props.bad}
      </p>

      <p>
        Total feedback given : {props.good + props.neutral + props.bad}
      </p>
      <p>
        Average score : {props.good*1 + props.neutral*0 + props.bad*(-1)}
      </p>
      Positive feedback : {posFeed} %
      </>
  )
  }
  
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


ReactDOM.render(<App />, 
  document.getElementById('root')
)