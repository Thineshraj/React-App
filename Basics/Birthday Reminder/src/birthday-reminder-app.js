import React from 'react'
import { data } from './data'
import './app.css'

const Birthday_Reminder = () => {
  const [people, setPeople] = React.useState(data)
  const clearAll = () => {
    setPeople([])
  }

  const addAll = () => {
    setPeople(data)
  }

  const total = people.length
  return (
    <>
      <section className='app-container'>
        <h1 className='topHeading'>{total} birthdays today</h1>
        {people.map((person) => {
          const { id, img, name, year } = person
          return (
            <div className='birthday-alternate' key={id}>
              <div className='img-container'>
                <img className='person-img' src={img} alt='myimg' />
              </div>

              <div className='details'>
                <h3 className='name'>{name}</h3>
                <h4 className='birth-year'>{year} years</h4>
              </div>
            </div>
          )
        })}
        <button type='button' className='button' onClick={() => clearAll()}>
          Clear All
        </button>
        <button type='button' className='button' onClick={() => addAll()}>
          Add All
        </button>
      </section>
    </>
  )
}

export default Birthday_Reminder
