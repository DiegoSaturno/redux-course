import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Samus"
        text="Prop system is nice."
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Zelda"
        timeAgo="Today at 2:30pm"
        text="Prop system sucks."
        imageSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Palutena"
        timeAgo="Yesterday at 12:30am"
        text="I want redux."
        imageSrc={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
