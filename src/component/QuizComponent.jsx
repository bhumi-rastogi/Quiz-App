import React, { Componant } from 'react'
import './QuizComponent.css'
 function QuizComponent() {
  
    return (

      <>

      <div className="box">

      <div>

        <h3>
          Question
          </h3>

        <p>
          1 of 15
          </p>

        <h3>
          What is the only mammal that can jump?
        </h3>
      
      </div>
      
      <div className="choice">
            
        <div className="a">
          Dog
        </div>
            
        <div className="a">
          Goat
        </div>
        
      </div>
      
      
      <div className="choice">

        <div className="a">
          Elephant
        </div>
            
        <div className="a">
          Lion
        </div>
        
      </div>
        
     
      <div className="click">
        
        <button className='one'>
          Previous
        </button>
        
        <button className='two'>
          Next
        </button>

        <button className='three'>
          Quit
        </button>

      </div>

      </div>

      </>
    )
  }

  export default QuizComponent