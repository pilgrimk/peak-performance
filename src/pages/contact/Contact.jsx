import React from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Contact = () => {
  return (
    <div id='contact'
      className='bg-rocks-background bg-cover bg-top bg-fixed 
      w-full min-h-screen'>
      <Header title={data.contactUs.title} />
    </div>
  )
}

export default Contact