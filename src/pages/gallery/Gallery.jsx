import React from 'react'
import { Header, GalleryDisplay } from '../../components'
import { data } from '../../constants'

const Gallery = () => {
  return (
    <div id='gallery'
      className='w-full flex flex-col justify-center items-center'>
      <Header title={data.galleryInfo.title} />
      <div className='flex flex-col justify-center'>
        <div className='container mx-auto max-w-3xl p-8'>
          <p>
            {data.galleryInfo.description}
          </p>
        </div>
        <div className='container mx-auto max-w-3xl p-8'>
          <GalleryDisplay images={data.galleryInfo.gallery_images} />
        </div>
      </div>
    </div>
  )
}

export default Gallery