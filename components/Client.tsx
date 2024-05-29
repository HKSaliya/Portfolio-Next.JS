import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCard'
import { testimonials } from './data'

const Client = () => {
  return (
    <div className="py-20" id='projects'>
        <h1 className="heading">
            Kind words from
            <span className='text-purple'>satisfied clients</span>
        </h1>
        <div className="flex  items-center">
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden "></div>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
        </div>
    </div>
  )
}

export default Client