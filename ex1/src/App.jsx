/**
 *This small application showed how to use components and props to 
 make the code more versatile and simpler to use and modify. 

 The Array also clears up the code compared to listing all the information
 as different variables. 
 */

// A functional component for displaying the course title
const Header = (props) => {
    // Receives 'course' as a prop and renders it inside an <h1> element
    return <h1>{props.course}</h1>;
};

// A functional component for displaying a single part of the course
const Content = (props) => {
    // Receives 'part' and 'exercises' as props and renders them in a <p> element
    return <p>{props.part} {props.exercises}</p>;
};

// A functional component for calculating and displaying the total number of exercises
const Total = (props) => {
    // Calculates the total by summing the three numbers passed as props
    const total = props.num1 + props.num2 + props.num3;
    // Renders the total inside a <p> element
    return <p>Total number of exercises: {total}</p>;
};

// The main App component that combines all other components
const App = () => {
    // The course name
    const course = 'Half Stack application development';

    // An array of objects representing parts of the course, each with a name and the number of exercises
    const parts = [
        { part: 'Fundamentals of React', ex: 10 },
        { part: 'Using props to pass data', ex: 7 },
        { part: 'State of a component', ex: 14 },
    ];

    // The main JSX structure rendered by the App component
    return (
        <div>
            {/* Pass the course name to the Header component */}
            <Header course={course} />

            {/* Render each part of the course by passing its details to the Content component */}
            <Content part={parts[0].part} exercises={parts[0].ex} />
            <Content part={parts[1].part} exercises={parts[1].ex} />
            <Content part={parts[2].part} exercises={parts[2].ex} />

            {/* Pass the number of exercises for each part to the Total component */}
            <Total num1={parts[0].ex} num2={parts[1].ex} num3={parts[2].ex} />
        </div>
    );
};

export default App; // Exports the App component so it can be used in other parts of the project

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