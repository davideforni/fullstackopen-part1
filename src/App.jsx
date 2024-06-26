const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.title} {props.exercises}
      </p>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part title={part1} exercises={exercises1} />
      <Part title={part2} exercises={exercises2} />
      <Part title={part3} exercises={exercises3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.number}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App