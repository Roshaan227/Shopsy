import React from 'react'
import Button from '../Shared/Button'
import image1 from '../../assets/category/earphone.png'
import image2 from '../../assets/category/watch.png'
import image3 from '../../assets/category/macbook.png'
// import image4 from '../../assets/category/gaming.png'
// import image5 from '../../assets/category/speaker.png'
// import image6 from '../../assets/category/vr.png'
const Category = () => {
  return (
    <div className='py-8'>
        <div className="mx-4">
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                 {/* first */}
              
                 <div className='py-10 px-5 bg-gradient-to-br from-black/90 text-white relative flex items-end h-[320px] to-black/70  rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-20 mb-2'>Earphone</p>
                            <Button text={"Browse"} bgColor={"bg-primary"} textColor={"white"}/>
                        </div>
                    </div>
                    <img src={image1} alt="" className='w-[200px] right-0 bottom-0 absolute'/>
                 </div>
                 
                 {/* second */}
                 <div className='py-10 px-5 bg-gradient-to-br from-brandYellow text-white relative flex items-end h-[320px] to-brandYellow/90 rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-50 mb-2'>Gadget</p>
                            <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandYellow"} />
                        </div>
                    </div>
                    <img src={image2} alt="" className='w-[200px] right-0 top-8 absolute'/>
                 </div>
                 {/* third */}
                 <div className='col-span-2 py-10 px-5 bg-gradient-to-br from-primary text-white relative flex items-end h-[320px] to-primary/90 rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-50 mb-2'>Gadget</p>
                            <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-primary"} />
                        </div>
                    </div>
                    <img src={image3} alt="" className='md:w-[320px] sm:w-[270px] w-[200px] right-0 bottom-8 md:-bottom-12 absolute'/>
                 </div>
            </div>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                 {/* first */}
              
                 <div className='py-10 lg:order-2 px-5 bg-gradient-to-br from-black/90 text-white relative flex items-end h-[320px] to-black/70  rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-20 mb-2'>Earphone</p>
                            <Button text={"Browse"} bgColor={"bg-primary"} textColor={"white"}/>
                        </div>
                    </div>
                    <img src={image1} alt="" className='w-[200px] right-0 bottom-0 absolute'/>
                 </div>
                 
                 {/* second */}
                 <div className='py-10 lg:order-3 px-5 bg-gradient-to-br from-brandYellow text-white relative flex items-end h-[320px] to-brandYellow/90 rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-50 mb-2'>Gadget</p>
                            <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-brandYellow"} />
                        </div>
                    </div>
                    <img src={image2} alt="" className='w-[200px] right-0 top-8 absolute'/>
                 </div>
                 {/* third */}
                 <div className='lg:order-1 col-span-2 py-10 px-5 bg-gradient-to-br dark:bg-slate-800 from-blue-600 text-white relative flex items-end h-[320px] to-[black]/90 rounded-3xl'>
                    <div>
                        <div >
                            <p className='text-gray-400 mb-[2px]'>Enjoy</p>
                            <p className='text-3xl font-semibold'>With</p>
                            <p className='text-4xl font-bold opacity-50 mb-2'>Gadget</p>
                            <Button text={"Browse"} bgColor={"bg-white"} textColor={"text-primary"} />
                        </div>
                    </div>
                    <img src={image3} alt="" className='md:w-[320px] sm:w-[270px] w-[200px] right-0 bottom-8 md:-bottom-12 absolute'/>
                 </div>
            </div>
           
        </div>
    </div>
  )
}

export default Category