import Image from 'next/image'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' w-full h-screen flex'>
      <div className=' w-[40%] h-full'>
        {children}
      </div>
      <div className=' col-end-3 w-[80%] h-full'>
        <Image src={"/google.svg"} alt='' width={6} height={6} className=' w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default layout
