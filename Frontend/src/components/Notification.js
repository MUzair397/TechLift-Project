import React from 'react'
import ReactPlayer from 'react-player'

function Notification() {
  return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-6'>
                <ReactPlayer className='w-100 h-100'  url={'https://www.youtube.com/watch?v=34SwR2sszKY'} controls={true} />
                </div>
                <div className='col-md-6'>
                    <h1><u>Our Story</u></h1>
                    <p className='lead'>What Does Lorem Ipsum Mean? Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself." Advertisements.</p>
                </div>
            </div>
        </div>
  )
}

export default Notification