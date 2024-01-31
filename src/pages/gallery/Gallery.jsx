import React from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Gallery = () => {
  return (
    <div id='gallery'
    className='w-full min-h-screen'>
      <Header title={data.galleryInfo.title} />
    </div>
  )
}

export default Gallery