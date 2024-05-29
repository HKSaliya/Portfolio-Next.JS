import React from 'react'
import { projects } from './data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
// const bgimg = '/public';

const Recentprojects = () => {
    return (
        <>
            <div className='py-20'>
                <h1 className="heading">
                    A small selection of {' '}
                    <span className='text-purple'> recent projects</span>
                </h1>

                <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10' >
                    {
                        projects.map(({ id, title, des, img, iconLists, link }) => (
                            <div key={id} className='sm:h-[42rem] h-[35rem] lg:min-h-[34.5rem] xl:h-[50vh] flex items-center justify-center sm:w-96 w-[80vw] ' >
                                <PinContainer title={title} href={link} >
                                    <div className='relative flex items-center justify-center sm:w-96 w-[60vw] lg:w-[25vw] overflow-hidden h-[40vh] lg:h-[35vh] mb-10 ' >
                                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]' >
                                            {/* <img src="/public/bg.png" alt='bg-img' /> */}
                                        </div>
                                        <img src={img} alt={title} className='z-10 absolute bottom-0 rounded-lg' />
                                    </div>
                                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-camp-1'>{title}</h1>
                                    <p className='lg:text-xl lg:font-normal font-light text-sm line-camp-2' >{des}</p>
                                    <div className="flex items-center justify-between mt-7 mb-3 ">
                                        <div className="flex items-center">
                                            {iconLists.map((icon, index) => (
                                                <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                    style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                                    <img src={icon} alt={icon} className='p-2' />
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex justify-center items-center' >
                                            <p className='flex lg:text-xl md:text-xs text-sm text-purple' >Check Live Site </p>
                                            <FaLocationArrow className='ms-3' color='#CBACF9' />
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>)
}

export default Recentprojects