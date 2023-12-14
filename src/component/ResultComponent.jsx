import React, { Component } from 'react'
import './ResultComponent.css'

function ResultComponent() {
  
    return (
      <>
      <h2>Result</h2>
      <div className="box">
        <h3>You need more practice !</h3>
        <h1>Your score is 20%</h1>
        <div className="know">
        <div className="know">
            <div className="writ">
            <h5>Totol number of quesions</h5>
            <h5>Number of attempted questions</h5>
            <h5>Number of correct answers</h5>
            <h5>Number of wrong answers</h5>
            </div>
        </div>
        <div className="math">
            <h5>15</h5>
            <h5>9</h5>
            <h5>3</h5>
            <h5>6</h5>
        </div>
        </div>
      </div>
      <div className="click">
      <button className='again'>Play Again</button>
      <button className='rest'>Back to Home</button>
      </div>
      </>
    )
  }


export default ResultComponent