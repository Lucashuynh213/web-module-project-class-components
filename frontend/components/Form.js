import React from 'react'


export default class Form extends React.Component {
  render() {
    return (
      <div className="form-check">
        <form>
          <div className='checkradio'>
          <input type='radio' value="" id="jogging"/>
          <label for="jogging">
            Jogging
          </label><br></br>
          <input type='radio' value="" id="walk"/>
          <label for="walk">
            Walk the dogs
          </label><br></br>
          <input type='radio' value="" id="play"/>
          <label for="play">
            Play Dota 2
          </label><br></br>
          <input type='radio' value="" id="concert"/>
          <label for="concert">
            Go see the concert
          </label><br></br>
          </div>
          <div className='typing'>
               
            <input
              label='Readonly'
              placeholder='Readonly input here...'
              id='formControlReadOnly'
              type='text'
              readonly
            />
            <button>Add</button>
            <br></br>

            <button className='clear'>Clear</button> 
          </div>
        </form>
      </div>
    )
  }
}
