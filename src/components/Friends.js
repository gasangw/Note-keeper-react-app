import React from 'react'
import people from './data'
import List from './List'

function Friends() {
  return (
    <div>
      {people.map(friend => {
        return (
          <div>
            <List data={friend}/>
          </div>
        )
      })}
    </div>
  )
}

export default Friends