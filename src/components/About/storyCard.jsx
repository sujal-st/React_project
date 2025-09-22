import React from 'react'

function storyCard(props) {
  return (
    
      <div className="storycard  flex flex-col text-[#ECE2CD]">
        <div className='font-bold text-[2rem]'>{props.year}</div>
        <div className={`${props.cl}`}></div>
        <div className='story-caption'>{props.caption}</div>
      </div>
  )
}

export default storyCard
