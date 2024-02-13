import React from 'react'
import { Header, GalleryDisplay } from '../../components'
import { data } from '../../constants'

const Gallery = () => {
  return (
    <div id='gallery'
    className='w-full flex flex-col justify-center items-center'>
      <Header title={data.galleryInfo.title} />
      <div className='container max-w-5xl p-4'>
      <GalleryDisplay images={data.galleryInfo.gallery_images} />
      </div>
    </div>
  )
}

export default Gallery