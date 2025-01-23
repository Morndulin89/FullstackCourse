import { useState } from 'react'

const Header = ({ header }) => <h1>{header.header}</h1> //creates the headers

/**
 * Sets the functionality of the button
 * @param {any} props
 * @returns a button with functionality and name based on props
 */
const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>  
    )
}

/**
 * Keeps track of the statistics (and if there isn't any feedback yet, just returns a note)
 * @param {any} props
 * @returns the statistics based on the changing values or "no feedback given"-note
 */
const Statistics = (props) => {
    const total = props.valueGood + props.valueNeutral + props.valueBad;
    const average = (props.valueGood - props.valueBad) / total;
    const positive = props.valueGood / total * 100;

    if (total > 0) {
        return (

            <div>
                <table>
                    <tbody>
                    <StatisticLine text="Good:" value={props.valueGood} />
                    <StatisticLine text="Neutral:" value={props.valueNeutral} /> 
                    <StatisticLine text="Bad: " value={props.valueNeutral} />
                    <StatisticLine text="All: " value={total} />
                    <StatisticLine text="Average: " value={average} />
                    <StatisticLine text="Positive: " value={positive} />
                    </tbody>
                </table>
            </div>
        )

    } else {
        return (
            <div>
                <h3>No feedback given</h3>
            </div>

        )

    } 
}

/**
 * Sets the formatting of the statisticlines
 * @param {any} props
 * @returns formatted columns in the table
 */
const StatisticLine = (props) => {
    return (
        <tr>
            <th colSpan="2">
                {props.text}  {props.value}
            </th>
        </tr>
    )
}

/**
 * Main part of the program
 * @returns sends the program to main.jsx
 */
const App = () => {

    //Headers are stored as an array, for easier use
    const headers = [
        { header:  "Give feedback" },
        { header: "Statistics"},
    ]

    // Setting up the states for the buttons
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    //Increasing the values
    const setGoodValue = () => {
        setGood(good +1)
    }

    const setNeutralValue = () => {
        setNeutral(neutral + 1)
    }

    const setBadValue = () => {
        setBad(bad + 1)
    }

    //the main part
    return (
        <div>
            <Header header={headers[0]} />
            <Button onClick={setGoodValue} text="Good"/>
            <Button onClick={setNeutralValue} text="Neutral" />
            <Button onClick={setBadValue} text="Bad" />
            <Header header={headers[1]} />
            <Statistics valueGood={good} valueNeutral={neutral} valueBad={bad} />
 
        </div>
    )
}

export default App