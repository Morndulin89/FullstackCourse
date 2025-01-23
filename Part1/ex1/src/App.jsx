/**
 * Small javaScript-example, that takes a "Course name" as a header and lists the different parts of the course, 
 * the number of exercises per part and the total number of exercises.
 *
 */

/**
 * Component that takes the header as a prop and returns it in correct form (as a header1)
 * @returns Course name as a header
 */
const Header = (props) => {
    return <h1>{props.course}</h1>
}

/**
 * Component that renders one part name and the amount of exercises
 * @returns name of the course and the number of exercises
 */
const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

/**
 * Component that takes all the parts as a props and renders all three Part-components, one for each part of the course.
 * @returns all three parts
 */
const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
        </div>
    );
};

/**
 * Component that counts the total sum of the exercises. 
 * @returns the total number of exercises
 */
const Total = (props) => {
    const total =
        props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises;

    return <p>Total number of exercises: {total}</p>
}

/**
 * The main component that is exported to main
 */
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 },
    ]

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App

/**
 * The original version of the code: 
 const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
 * 
 */