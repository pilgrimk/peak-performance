import React from 'react'
import { Header } from '../../components'
import { data } from '../../constants'

const Contact = () => {
  return (
    <div id='contact'
      className='bg-rocks-background bg-cover bg-top bg-fixed 
      w-full min-h-[45vh] flex flex-col '>
      <Header title={data.contactUsPage.title} />
      <div className='container mx-auto max-w-3xl p-8 bg-slate-100 
      my-8 rounded-md shadow-md'>
        <p>{data.contactUsPage.description}</p>
      </div>
    </div>
  )
}

export default Contact