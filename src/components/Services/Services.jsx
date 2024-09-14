import React from 'react'
import {
    FaCarSide,FaHeadphonesAlt,FaWallet,FaCheckCircle
} from 'react-icons/fa'

const serviceData =[
    {
        id:1,
        icon:<FaCarSide className="text-4xl md:text-5xl text-primary"/>,
        title:"Free Shipping",
        description:"Free Shipping  on all order"
    },
    {
        id:2,
        icon:<FaHeadphonesAlt className="text-4xl md:text-5xl text-primary"/>,
        title:"Free Shipping",
        description:"Free Shipping  on all order"
    },
    {
        id:3,
        icon:<FaWallet className="text-4xl md:text-5xl text-primary"/>,
        title:"Free Shipping",
        description:"Free Shipping  on all order"
    },
    {
        id:4,
        icon:<FaCheckCircle className="text-4xl md:text-5xl text-primary"/>,
        title:"Free Shipping",
        description:"Free Shipping  on all order"
    }
]

const Services = () => {
  return (
    <div className='pb-5'>
       <div className="mx-5">
    <div className="grid gap-4 gap-y-8 grid-cols-2 lg:grid-cols-4">
        {serviceData.map((data) => (
            <div key={data.id} className="text-center flex gap-3 items-center justify-center sm:flex-row flex-col  p-4 border rounded-lg">
                {data.icon}
              <div className='flex flex-col leading-none tracking-tighter justify-start items-start'>
              <h3 className="mt-4 text-lg font-bold">{data.title}</h3>
                <p className="mt-2 text-sm">{data.description}</p>

                </div>              
              </div>
        ))}
    </div>
</div>

    </div>
  )
}

export default Services