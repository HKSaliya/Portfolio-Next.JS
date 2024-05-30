import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { companies, testimonials } from './data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Client = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        Kind words from
        <span className='text-purple'>satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
        <div className='flex flex-wrap items-center justify-center '>
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className='flex md:mx-w-60 max-w-32 gap-2'>
              <img
                src={img}
                alt={name}
                className='md:w-10 w-5'
              />
              <img src={nameImg} alt={name} className='md:max-w-24 w-20'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client